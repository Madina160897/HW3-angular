import { BehaviorSubject } from 'rxjs';
import { Component } from "@angular/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {}

  public count$$: BehaviorSubject <number> = new BehaviorSubject <number> (0);

  increment() {
    const value = this.count$$.getValue() + 1;
    this.count$$.next(value)
  }

  decrement() {
    const value = this.count$$.getValue() - 1;
    this.count$$.next(value)
  }

}
