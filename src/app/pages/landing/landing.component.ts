import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SliderService} from '../../services/slider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

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

  constructor(private sliderService: SliderService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chicagoSlider = new Swiper('.chicago-slider', this.config);
    this.florenciaSlider = new Swiper('.florencia-slider', this.config);
    this.routeSubscription = this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'registro') {
        this.sliderService.changeSlide(0);
        this.router.navigate([]);
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
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.sliderService.changeSlide(0);
  }
}
