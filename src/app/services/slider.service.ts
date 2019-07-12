import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private changeToSlide: Subject<number>;
  public slideChanged: Observable<number>;

  constructor() {
    this.changeToSlide = new Subject();
    this.slideChanged = this.changeToSlide.asObservable();
  }

  public changeSlide(slide: number) {
    this.changeToSlide.next(slide);
  }
}
