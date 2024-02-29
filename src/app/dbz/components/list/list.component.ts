import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }];

  @Output()
  public OnDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDelete(characterId: string): void {
    console.log('The character id is: ' + characterId);
    this.OnDeleteCharacter.emit(characterId);
  } 

}
