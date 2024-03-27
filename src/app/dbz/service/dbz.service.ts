import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCaracter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCaracter);
  }

  // this.characters.splice(index, 1);
  onDeleteList(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
