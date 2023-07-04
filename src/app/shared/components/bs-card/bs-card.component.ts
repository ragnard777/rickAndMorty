import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.css']
})

export class BsCardComponent implements OnInit {

  @Input() nombreCharacter:any;
  @Input() imagenCharacter:any;
  @Input() estadoCharacter:any;
  estado: any;
  clickable: Boolean = false;
 /*  @Output() newItemEvent = new EventEmitter<string>(); */

ngOnInit(): void {
    this.inicializarVariables();
    //this.nombrePersonaje = this.nombreCharacter;
}

/* addNewItem(value:any):void{
  console.log("funcion emiter -->");
  console.log("valor value", value);
  this.newItemEvent.emit(value);
}
 */

inicializarVariables(){
  this.clickable = false;
}

}
