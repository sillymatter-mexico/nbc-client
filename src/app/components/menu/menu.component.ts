import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public expanded: boolean;

  constructor(private menuService: MenuService) {
    this.expanded = this.menuService.isExpanded.getValue();
    this.menuService.isExpanded
      .subscribe((expanded: boolean) => {
        this.expanded = expanded;
        console.log('menu toggled in component', this.expanded);
      });
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
