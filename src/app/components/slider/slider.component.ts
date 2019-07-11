import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SliderService} from '../../services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  public config = {
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
    direction: 'horizontal',
    effect: 'slide',
    spaceBetween: 0,
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };
  public slider: any;

  constructor(private sliderService: SliderService) {
    this.sliderService.slideChanged
      .subscribe((slide: number) => {
        this.goToSlide(slide);
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.slider = new Swiper('.main-slider', this.config);
  }

  stopAutoplay() {
    this.slider.autoplay.stop();
  }

  startAutoplay() {
    this.slider.autoplay.start();
  }

  goToSlide(slide: number) {
    this.slider.slideToLoop(slide, 500, false);
  }
}
