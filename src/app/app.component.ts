import { Component } from '@angular/core';
import {MenuService} from './services/menu.service';
import {fadeInOutAnimation} from './animations/router.animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeInOutAnimation ]
})
export class AppComponent {
  constructor(private menuService: MenuService) {}

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
