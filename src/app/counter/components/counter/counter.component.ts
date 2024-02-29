import { Component } from "@angular/core";

@Component({
    selector: 'counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public counter: number = 10;

  increaseValue(numberToIncrease: number) {
    this.counter += numberToIncrease;
  }

  decreaseValue(numberToIncrease: number) {
    this.counter -= numberToIncrease;
  }

  resetCounter() {
    this.counter = 10;
  }   
}