import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit{
  public source$ = new Observable(subscriber => {
    console.log('stream start');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    console.log('stream over');
    subscriber.complete();
  });
  public subjectSource$ = new Subject();
  public behaviorSubjectSource$ = new BehaviorSubject(0);
  public replaySubjectSource$ = new ReplaySubject(3);
  public asyncSubject$ = new AsyncSubject();

  private _score = new Subject();
  public score$ = this._score.asObservable();

  public updateScore(score:number) {
    if(score > 60){
      this._score.next(score);
    }
  }
  

  ngOnInit(): void {
    this.source$.subscribe({
      next:data => console.log(`Observable 第一次訂閱:${data}`),
      complete:()=> console.log(`第一次訂閱完成`)
    })

    this.subjectSource$.subscribe(data => console.log(`[Subject] 第一次被訂閱:${data}`));
    this.subjectSource$.next(1);
    this.subjectSource$.next(2);

    this.subjectSource$.subscribe(data => console.log(`[Subject] 第二次被訂閱:${data}`)
    )
    this.subjectSource$.next(3);
    this.subjectSource$.next(4);
    this.subjectSource$.complete();

    this.behaviorSubjectSource$.subscribe(data =>console.log(`BehaviorSubject 第一次訂閱:${data}`)
    )
    this.behaviorSubjectSource$.next(1);
    this.behaviorSubjectSource$.next(2);
    this.behaviorSubjectSource$.subscribe(data => console.log(`BehaviorSubject 第二次訂閱:${data}`)
    )
    console.log(`前面一次 BehaviorSubject 的內容為:${this.behaviorSubjectSource$.value}`);

    this.replaySubjectSource$.subscribe(data => console.log(`ReplaySubject 第一次訂閱:${data}`)
    )
    this.replaySubjectSource$.next(1);
    this.replaySubjectSource$.next(2);
    this.replaySubjectSource$.next(3);
    this.replaySubjectSource$.next(4);
    this.replaySubjectSource$.subscribe(data => console.log(`ReplaySubject 第二次訂閱:${data}`)
    )

    this.asyncSubject$.subscribe(data => console.log(`AsyncSubject 第一次訂閱:${data}`)
    )
    this.asyncSubject$.next(1);
    this.asyncSubject$.next(2);
    this.asyncSubject$.next(3);
    this.asyncSubject$.complete();

    this.score$.subscribe(data => console.log(`[asObservable]:${data}`))
    this._score.next(80);
    this.updateScore(90);

  }
}
