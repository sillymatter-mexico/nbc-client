import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError: string;
  public loading: boolean;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              private toastrService: ToastrService,
              private router: Router) {
    this.loading = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      accepts_terms: [false, Validators.requiredTrue],
      club_premier_id: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }

  onLogin() {
    this.loading = true;
    const login = {
      accepts_terms: this.loginForm.value.accepts_terms,
      club_premier_id: String(this.loginForm.value.club_premier_id)
    };
    this.userService.login(login)
      .subscribe(
        (response: any) => {
          this.loading = false;
          this.userService.user = response;
          this.router.navigateByUrl('/juegos');
        },
        (error: any) => {
          this.loading = false;
          this.loginForm.reset();
          if (error.status === 500) {
            this.toastrService.error('Intenta más tarde', 'Lo sentimos, ocurrió un error con el servidor');
          } else {
            this.loginError = error.error.messages;
          }
        }
      );
  }

  toggleTerms() {
    const checked = this.loginForm.controls.accepts_terms.value;
    this.loginForm.controls.accepts_terms.setValue(!checked);
  }
}
