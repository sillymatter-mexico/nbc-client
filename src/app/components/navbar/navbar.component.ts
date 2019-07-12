
import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public hideSignIn: boolean;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
