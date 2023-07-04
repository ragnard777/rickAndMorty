import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CHARACTERS } from 'src/app/data/characters';
import { Character } from 'src/app/models/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = CHARACTERS;
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  addNewItem(value: any) {
    console.log('[funcion addNewItem]');
    console.log('[variable character click] value', value);
  }
}
