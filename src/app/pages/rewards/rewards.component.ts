import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit, AfterViewInit {

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

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.chicagoSlider = new Swiper('.chicago-slider', this.config);
    this.florenciaSlider = new Swiper('.florencia-slider', this.config);
  }

}
