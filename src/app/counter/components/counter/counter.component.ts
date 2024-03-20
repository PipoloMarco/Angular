import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increseBy(1)">+1</button>
    <button (click)="onReset()">Reset</button>
    <button (click)="descrementBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  increseBy(value: number): void {
    this.counter = this.counter + value;
  }
  descrementBy(value: number): void {
    this.counter = this.counter - value;
  }
  onReset(): void {
    this.counter = 0;
  }
}
