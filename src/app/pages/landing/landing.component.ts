import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(element: any) {
    console.log(element);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
