import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent implements OnInit {

  public file = 'https://agenteuniversal.s3.amazonaws.com/reglas.pdf';
  public localFile = '/assets/pdfs/reglas.pdf';

  constructor() { }

  ngOnInit() {
  }

}
