import { Component, OnInit } from '@angular/core';
import {fadeInOutAnimation} from '../../animations/router.animation';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CompletedModalComponent} from '../../components/completed-modal/completed-modal.component';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss'],
  animations: [fadeInOutAnimation]
})
export class GameContainerComponent implements OnInit {

  public games: any[];
  public selectedGame: number;
  public loadingContainer: boolean;
  private currentGameWindow: any;
  private bsModalRef: BsModalRef;

  constructor(private userService: UserService,
              private gameService: GameService,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private router: Router) {
    this.loadingContainer = false;
    this.selectedGame = 1;
    this.games = this.gameService.gameList;
    this.updateGameAvailability();
    this.fetchGameInfo();
    this.route.queryParams.subscribe(params => {
      if (params.finished) {
        this.selectedGame = +params.finished < this.games.length ? +params.finished + 1 : +params.finished;
        this.openCompletedModal(+params.finished);
        this.router.navigate([]);
      }
    });
  }

  ngOnInit() {
  }

  fetchGameInfo() {
    this.loadingContainer = true;
    this.userService.updateUserInfo()
      .subscribe((data: any) => {
        this.userService.gameInfo = data;
        for (const item of data.game) {
          this.games[item.game.order - 1] = {
            ...this.games[item.game.order - 1],
            attempt: item.attempt,
            highScore: +item.high_score,
            highBonus: +item.high_bonus
          };
        }
        // console.log(this.games);
        this.loadingContainer = false;
        // console.log('game info', data);
      }, (error: any) => {
        this.loadingContainer = false;
      });
  }

  getGameNumber(index: number) {
    return index < 10 ?  `0${index}` : String(index);
  }

  setSelectedGame(index: any) {
    this.selectedGame = index;
  }

  sendMessage(message: any) {
    localStorage.setItem('message', JSON.stringify(message));
    localStorage.removeItem('message');
  }

  openGame(game: any) {
    this.loadingContainer = true;
    const games = this.userService.user.game;
    if (games.some(x => x.game.order === game.index)) {
      const currentGame = games.find(x => x.game.order === game.index);
      localStorage.setItem('currentGame', JSON.stringify(currentGame));
      this.loadingContainer = false;
      this.currentGameWindow = window.open(game.url, '_self');
    } else {
      this.createSession(game);
    }
  }

  createSession({index, url}) {
    this.gameService.createGameSession({number_game: index})
      .subscribe((data: any) => {
        this.loadingContainer = false;
        // console.log('create session data', data);
        localStorage.setItem('currentGame', JSON.stringify(data));
        this.currentGameWindow = window.open(url, '_self');
      }, (error: any) => {
        this.loadingContainer = false;
        if (error.status === 400) {
          this.toastrService.error('Primero debes completar el juego anterior');
        } else {
          this.toastrService.error('Ocurrió un error al cargar la sesión del juego');
        }
      });
  }

  canBePlayed(game: any) {
    return game.active && !this.isCompleted(game);
  }

  isCompleted(game: any) {
    const maxAttempt = (game.index === 1 || game.index === 4) ? 3 : 4;
    return !((game.highScore + game.highBonus) < game.maxPoints && game.attempt < maxAttempt);
  }

  private openCompletedModal(game: number) {
    const initialState = {
      completedGame: game
    };
    this.bsModalRef = this.modalService.show(CompletedModalComponent, {initialState});
  }

  private updateGameAvailability() {
    const now = moment().tz('America/Mexico_City');
    for (const game of this.games) {
      const releaseDate = moment(game.releaseDateArray).tz('America/Mexico_City');
      const isAfter = now.isAfter(releaseDate);
      if (isAfter) {
        game.active = true;
      }
    }
    // console.log(this.games);
  }
}
