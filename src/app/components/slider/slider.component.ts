import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  public slideIndex: number;
  public config = {
    a11y: true,
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
    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      reverseDirection: true,
      disableOnInteraction: false
    },
  };
  public slider: any;

  constructor() {
    this.slideIndex = 0;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.slider = new Swiper('.swiper-container', this.config);
  }

  stopAutoplay() {
    this.slider.autoplay.stop();
  }

  startAutoplay() {
    this.slider.autoplay.start();
  }
}
