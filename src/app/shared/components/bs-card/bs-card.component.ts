import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.css'],
})
export class BsCardComponent implements OnInit {
  @Input() nombreCharacter: any;
  @Input() imagenCharacter: any;
  @Input() estadoCharacter: any;
  estado: any;
  clickable: Boolean = false;

  ngOnInit(): void {
    this.inicializarVariables();
  }

  inicializarVariables() {
    this.clickable = false;
  }
}
