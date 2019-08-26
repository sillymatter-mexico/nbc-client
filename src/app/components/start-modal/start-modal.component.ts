import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss']
})
export class StartModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private router: Router) { }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['/'], { fragment: 'registro' });
    this.bsModalRef.hide();
  }
}
