import { Component,Injector, inject } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { IState } from './state.interface';
import { increment, decrement, reset } from '../../core/store/action/counter.action';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$!: Observable<number>;
  private store: Store<{ count: number }> = inject(Store);

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
