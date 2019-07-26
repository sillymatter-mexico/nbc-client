
import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
