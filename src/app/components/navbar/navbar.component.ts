
import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public hasScrolled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    offset > 16 ? this.hasScrolled = true : this.hasScrolled = false;
  }

}
