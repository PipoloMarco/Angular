import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get character(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteList(id: string): void {
    this.dbzService.onDeleteList(id);
  }
  onNewCaracter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }
}
