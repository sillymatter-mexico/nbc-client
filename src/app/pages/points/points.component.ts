import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {GameService} from '../../services/game.service';
import {UserService} from '../../services/user.service';

declare var FB;

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
  public activeGameStatus: string;

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
        this.userInfo = data;
        for (const item of data.game) {
          this.gameList[item.game.order - 1] = {
            ...this.gameList[item.game.order - 1],
            highScore: +item.high_score,
            highBonus: +item.high_bonus,
            attempt: item.attempt
          };
        }
        this.loadingContainer = false;
        this.activeGameStatus = this.getGameStatus(1);
      }, (error: any) => {
        this.loadingContainer = false;
      });
  }

  ngAfterViewInit() {
    this.scoreSlider = new Swiper('.points-slider', this.scoreConfig);
    this.scoreSlider.on('slideChange', () => {
      const activeGame = this.scoreSlider.activeIndex + 1;
      this.activeGameStatus = this.getGameStatus(activeGame);
    });
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

  getGameStatus(gameIndex: number) {
    const game = this.gameList.find((x: any) => x.index === gameIndex);
    const hasLevels = (game.index === 2 || game.index === 3);
    const maxAttempt = hasLevels ? 4 : 3;

    if ((game.highScore + game.highBonus) < game.maxPoints && game.attempt < maxAttempt) {
      if (hasLevels && game.attempt === 3) {
        return `Tienes ${4 - game.attempt} oportunidad para mejorar tu puntuación`;
      } else {
        const chances =  3 - game.attempt === 1 ? 'oportunidad' : 'oportunidades';
        return `Tienes ${3 - game.attempt} ${chances} para mejorar tu puntuación`;
      }
    }
    return 'Completado';
  }

  share() {
    FB.ui({
      method: 'share',
      href: 'https://agenteuniversal.clubpremier.com',
      hashtag: '#AgenteUniversal',
      quote: 'He conseguido ' + this.getTotalScore() +
             ' puntos con Agente Universal, entra y participa para la posibilidad de viajar a Chicago y Florencia.'
    }, (response) => {console.log('response'); });
  }
}
