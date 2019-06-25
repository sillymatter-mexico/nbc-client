
import {Component, HostListener, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public hasScrolled: boolean;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const offset =     window.pageYOffset
                    || document.documentElement.scrollTop
                    || document.body.scrollTop
                    || 0;
    this.hasScrolled = offset > 16;
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
