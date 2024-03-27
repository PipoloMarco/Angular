import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'abc',
    power: 0,
  };

  public emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0)
      return console.log('Error al Ejecucion');

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
