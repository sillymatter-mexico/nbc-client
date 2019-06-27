import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private expanded: boolean;
  public isExpanded: BehaviorSubject<boolean>;

  constructor() {
    this.expanded = false;
    this.isExpanded = new BehaviorSubject<boolean>(this.expanded);
  }

  public toggleMenu() {
    this.expanded = !this.expanded;
    this.isExpanded.next(this.expanded);
    console.log('menu toggled', this.expanded);
  }
}
