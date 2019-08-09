import { Injectable } from '@angular/core';
import {catchError, map, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public readonly gameList: any[];

  constructor(private http: HttpClient, private userService: UserService) {
    this.gameList = [
      {
        icon: '/assets/img/logos/logo_game_1.png',
        background: '/assets/img/backgrounds/bg_game_1.png',
        cover: '/assets/img/tile_game_1.png',
        description: `
            <br>Este es el primer paso para ser un <span class="text-pink">Agente Universal</span>.<br>
            ¿Serás capaz de conseguir todas <span class="text-pink">las pistas</span>?`,
        index: 1,
        textIndex: '/assets/img/texts/text_juego_1.png',
        active: true,
        completed: false,
        url: `${environment.gameServer}/el-novato/`,
        releaseDate: '15/08/19',
        releaseDateArray: [2019, 7, 15],
        maxPoints: 1000,
        highScore: 0,
        highBonus: 0,
        attempt: 0
      },
      {
        icon: '/assets/img/logos/logo_game_2.png',
        background: '/assets/img/backgrounds/bg_game_2.png',
        cover: '/assets/img/tile_game_2.png',
        description: `
            <br>Para ser un buen detective se necesita una <span class="text-pink">buena memoria</span>.
            <br><br>¡Veamos que tan bien lo haces!`,
        index: 2,
        textIndex: '/assets/img/texts/text_juego_2.png',
        active: true,
        completed: false,
        url: `${environment.gameServer}/ley-y-orden/`,
        releaseDate: '29/08/19',
        releaseDateArray: [2019, 7, 29],
        maxPoints: 4300,
        highScore: 0,
        highBonus: 0,
        attempt: 0
      },
      {
        icon: '/assets/img/logos/logo_game_3.png',
        background: '/assets/img/backgrounds/bg_game_3.png',
        cover: '/assets/img/tile_game_3.png',
        description: `Cada vez más cerca, toma el <span class="text-pink">volante</span> y demuestra que tan buen agente eres.`,
        index: 3,
        textIndex: '/assets/img/texts/text_juego_3.png',
        active: true,
        completed: false,
        url: `${environment.gameServer}/policia-de-chicago/`,
        releaseDate: '12/09/19',
        releaseDateArray: [2019, 8, 12],
        maxPoints: 3000,
        highScore: 0,
        highBonus: 0,
        attempt: 0
      },
      {
        icon: '/assets/img/logos/logo_game_4.png',
        background: '/assets/img/backgrounds/bg_game_4.png',
        cover: '/assets/img/tile_game_4.png',
        description: `
            Llegaste al final, sólo te queda demostrar tus habilidades de <span class="text-pink">negociador</span>
             y poner las <span class="text-pink">piezas</span> en su lugar.`,
        index: 4,
        textIndex: '/assets/img/texts/text_juego_4.png',
        active: true,
        completed: false,
        url: `${environment.gameServer}/el-negociador/`,
        releaseDate: '26/09/19',
        releaseDateArray: [2019, 8, 26],
        maxPoints: 3000,
        highScore: 0,
        highBonus: 0,
        attempt: 0
      }
    ];
  }

  createGameSession(data: any) {
    return this.http.post( `users/${this.userService.user.uuid}/session/`, data)
      .pipe(
        map((response: any) => response.data),
        catchError(err => {
          console.log('create session error', err);
          return throwError(err);
        }),
        retry(3),
      );
  }

}
