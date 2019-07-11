import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SliderService} from '../../services/slider.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

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

  constructor(private sliderService: SliderService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chicagoSlider = new Swiper('.chicago-slider', this.config);
    this.florenciaSlider = new Swiper('.florencia-slider', this.config);
  }

  goToRegister(element: any) {
    console.log(element);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.sliderService.changeSlide(0);
  }
}
