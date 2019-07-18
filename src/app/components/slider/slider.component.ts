import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SliderService} from '../../services/slider.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  public mainConfig = {
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
    effect: 'slide',
    spaceBetween: 0,
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };
  public mainSlider: any;

  constructor(private sliderService: SliderService,
              private userService: UserService,
              private router: Router) {
    this.sliderService.slideChanged
      .subscribe((slide: number) => {
        this.goToSlide(slide);
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.mainSlider = new Swiper('.main-slider', this.mainConfig);
  }

  stopAutoplay() {
    this.mainSlider.autoplay.stop();
  }

  startAutoplay() {
    this.mainSlider.autoplay.start();
  }

  goToSlide(slide: number) {
    if (slide === 0 && this.userService.loggedIn) {
      this.router.navigateByUrl('/juegos');
    } else {
      this.mainSlider.slideToLoop(slide, 500, false);
    }
  }
}
