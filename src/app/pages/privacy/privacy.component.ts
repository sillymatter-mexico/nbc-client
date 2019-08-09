import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  public file = 'https://agenteuniversal.s3.amazonaws.com/reglas.pdf';
  public localFile = '/assets/pdfs/reglas.pdf';
  constructor() {}

  ngOnInit() {
  }

}
