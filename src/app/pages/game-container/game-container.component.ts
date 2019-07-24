import { Component, OnInit } from '@angular/core';
import {fadeInOutAnimation} from '../../animations/router.animation';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss'],
  animations: [fadeInOutAnimation]
})
export class GameContainerComponent implements OnInit {

  public games: any[];
  public selectedGame: number;

  constructor() {
    this.selectedGame = 1;
    this.games = [
      {
        icon: '/assets/img/logos/logo_game_1.png',
        background: '/assets/img/backgrounds/bg_game_1.png',
        description: `
          Comenzar de nuevo no es fácil, especialmente para el chico de una ciudad pequeña
          <span class="text-pink">John Nolan</span> que,
          después de un incidente que cambió su vida,
          está persiguiendo su sueño de ser un oficial de policía de
          <span class="text-pink">Los Ángeles</span>.`,
        index: 1,
        textIndex: '/assets/img/texts/text_juego_1.png',
        active: false,
        url: 'https://game-rookie.herokuapp.com/index.html'
      },
      {
        icon: '/assets/img/logos/logo_game_2.png',
        background: '/assets/img/backgrounds/bg_game_2.png',
        description: `
          Esta serie emocional y contundente de la marca <span class="text-pink">"Law & Order"</span>
          de <span class="text-pink">NBC</span> narra las vidas de la
          Unidad de Víctimas Especiales del Departamento de
          <span class="text-pink">Policía de la Ciudad de Nueva York</span>,
          un escuadrón de detectives de élite que investiga delitos de agresión sexual,
          abuso infantil y violencia doméstica.`,
        index: 2,
        textIndex: '/assets/img/texts/text_juego_2.png',
        active: false,
        url: 'https://159.89.157.47/memory/'
      },
      {
        icon: '/assets/img/logos/logo_game_3.png',
        background: '/assets/img/backgrounds/bg_game_3.png',
        description: `
          El <span class="text-pink">Distrito 21</span> del Departamento de
          <span class="text-pink">Policía de Chicago</span> está compuesto de policías uniformados,
          que tratan con la delincuencia callejera y la unidad de Inteligencia,
          ocupada de los delitos graves como el tráfico de drogas.`,
        index: 3,
        textIndex: '/assets/img/texts/text_juego_3.png',
        active: false,
        url: 'https://159.89.157.47/car/'
      },
      {
        icon: '/assets/img/logos/logo_game_4.png',
        background: '/assets/img/backgrounds/bg_game_4.png',
        description: `
          <span class="text-pink">Eric Beaumont</span>, experto <span class="text-pink">negociador</span>
          en conflictos criminales y su equipo, tratan de salvar las vidas de personas en situaciones vulnerables,
          resolviendo sus crisis. Beaumont conoce a la perfección el comportamiento humano y criminal.`,
        index: 4,
        textIndex: '/assets/img/texts/text_juego_4.png',
        active: false,
        url: 'https://159.89.157.47/puzzle/'
      }
    ];
  }

  ngOnInit() {
  }

  getGameNumber(index: number) {
    return index < 10 ?  `0${index}` : String(index);
  }

  setSelectedGame(index: any) {
    this.selectedGame = index;
  }
}
