import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor() {
    window.document.addEventListener('myEvent', (e: any) => console.log(e.detail), false);
    localStorage.setItem('parent-test', 'this is an item set in the parent window');
  }

  ngOnInit() {
  }

}
