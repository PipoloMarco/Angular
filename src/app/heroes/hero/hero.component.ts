import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  get capitalizadName(): string {
    return this.name.toLocaleUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider Man';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'iron man';
  }
}
