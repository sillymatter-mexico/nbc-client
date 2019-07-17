import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit, AfterViewInit {

  public scoreConfig = {
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    observer: true,
    observeSlideChildren: true,
    direction: 'horizontal',
    effect: 'fade',
    spaceBetween: 0,
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };
  public scoreSlider: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scoreSlider = new Swiper('.points-slider', this.scoreConfig);
  }

}
