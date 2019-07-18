import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public expanded: boolean;

  constructor(private menuService: MenuService, public userService: UserService) {
    this.expanded = this.menuService.isExpanded.getValue();
    this.menuService.isExpanded
      .subscribe((expanded: boolean) => {
        this.expanded = expanded;
      });
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  logout() {
    this.toggleMenu();
    this.userService.logout();
  }

}
