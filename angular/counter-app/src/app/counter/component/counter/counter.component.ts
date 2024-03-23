import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h3>{{counter}}</h3>

    <button (click)="increment(5)">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement(12)">Decrement</button>
`
})
export class CounterComponent {
  public title: string = 'counter-app';

  public counter: number = 0

  public reset() {
    this.counter = 0
  }

  public increment(value: number = 1): void {
    this.counter += value
  }

  public decrement(value: number = 1): void {
    if (this.counter - value < 1) {
      this.counter = 0

      return
    }

    this.counter -= value
  }
}
