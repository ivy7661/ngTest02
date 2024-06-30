import { Component, OnInit } from '@angular/core';
import { Observable,Subscription,timer,map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eletronic-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eletronic-clock.component.html',
  styleUrl: './eletronic-clock.component.scss'
})
export class EletronicClockComponent implements OnInit{
  today: Date = new Date();
  public timeObservable$: Observable<Date>= new Observable;
  private subscription: Subscription;

  constructor() {
    this.subscription = this.timeObservable$.subscribe();
  }

  ngOnInit(): void {
    this.timeObservable$ = timer(0, 1000).pipe(
      map(() => new Date())
    );

    // 訂閱 Observable 以便可以在 ngOnDestroy 中取消訂閱
    this.subscription = this.timeObservable$.subscribe();
  }
}
