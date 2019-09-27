import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SliderService} from '../../services/slider.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {StartModalComponent} from '../../components/start-modal/start-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  public config = {
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    observer: true,
    direction: 'horizontal',
    effect: 'fade',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  };
  public chicagoSlider: any;
  public florenciaSlider: any;
  private routeSubscription: Subscription;
  private bsModalRef: BsModalRef;

  constructor(private sliderService: SliderService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private modalService: BsModalService) {
    if (!this.userService.hasSeenPopUp && !this.userService.loggedIn) {
      // this.bsModalRef = this.modalService.show(StartModalComponent, {});
      this.userService.hasSeenPopUp = true;
    }

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chicagoSlider = new Swiper('.chicago-slider', this.config);
    this.florenciaSlider = new Swiper('.florencia-slider', this.config);
    this.routeSubscription = this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'registro') {
        if (this.userService.loggedIn) {
          this.router.navigateByUrl('/juegos');
        } else {
          this.sliderService.changeSlide(0);
          this.router.navigate([]);
        }
      }
      if (fragment === 'inicio') {
        this.sliderService.changeSlide(1);
        this.router.navigate([]);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  goToRegister(element: any) {
    if (this.userService.loggedIn) {
      this.router.navigateByUrl('/juegos');
    } else  {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
      this.sliderService.changeSlide(0);
    }
  }
}
