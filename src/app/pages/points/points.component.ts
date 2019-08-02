import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {GameService} from '../../services/game.service';
import {UserService} from '../../services/user.service';

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
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };
  public scoreSlider: any;
  public gameList: any[];
  public loadingContainer: boolean;
  public userInfo: any;

  constructor(private gameService: GameService, private userService: UserService) {
    this.loadingContainer = false;
    this.gameList = this.gameService.gameList;
    this.fetchGameInfo();
  }

  ngOnInit() {
  }

  fetchGameInfo() {
    this.loadingContainer = true;
    this.userService.updateUserInfo()
      .subscribe((data: any) => {
        this.userService.gameInfo = data;
        for (const item of data.game) {
          this.userInfo = data;
          this.gameList[item.game.order - 1] = {
            ...this.gameList[item.game.order - 1],
            highScore: +item.high_score,
            highBonus: +item.high_bonus
          };
        }
        console.log(this.gameList);
        this.loadingContainer = false;
      }, (error: any) => {
        this.loadingContainer = false;
      });
  }

  ngAfterViewInit() {
    this.scoreSlider = new Swiper('.points-slider', this.scoreConfig);
  }

  getCompletedGames(completed: any) {
    return `0${completed}`;
  }

  getTotalScore() {
    let totalScore = 0;
    for (const game of this.gameList) {
      totalScore += game.highScore + game.highBonus;
    }
    return totalScore;
  }
}
