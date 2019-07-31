import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-completed-modal',
  templateUrl: './completed-modal.component.html',
  styleUrls: ['./completed-modal.component.scss']
})
export class CompletedModalComponent implements OnInit {

  public completedGame: number;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
