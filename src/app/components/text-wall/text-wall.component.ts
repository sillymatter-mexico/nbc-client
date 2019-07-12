import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'app-text-wall',
  templateUrl: './text-wall.component.html',
  styleUrls: ['./text-wall.component.scss']
})
export class TextWallComponent implements OnInit, AfterViewInit {
  @Input() public title: string;
  @ViewChild('textWall', {static: false}) textWall: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const simpleBar = new SimpleBar(this.textWall.nativeElement, {
      autoHide: false
    });
  }

}
