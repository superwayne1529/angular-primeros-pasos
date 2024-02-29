import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({id: uuid(), name: this.character.name, power: this.character.power});

    this.character.id = '';
    this.character.name = '';
    this.character.power = 0;
  }
}
