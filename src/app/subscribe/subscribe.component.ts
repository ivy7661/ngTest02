import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit,OnDestroy{
  // public observerA = {
  //   next: (id:number) => {
  //     console.log(`我是A，我收到影片${id}上架通知了`);
  //   },
  //   error:() => {},
  //   complete:() => {}
  // }

  // public observerASubscription = this.youtuber$.subscribe(this.observerA);

  // public observerBSubscription = this.youtuber$.subscribe((id:number) => {
  //   console.log(`我是B，我收到影片${id}通知了`);
  // })
  // user
  private youtuber$ = this.user.youtuber$;

  public ytId:number = 0;

  // source
  public source$ = new Observable(subscriber => {
    console.log('stream start');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    console.log('stream end');
    subscriber.complete();
  });

  constructor(private user:UserService) {};

  ngOnInit(): void {
    this.youtuber$.subscribe(res => {
      console.log(res);
    });

    this.source$.subscribe({
      next:data => console.log(`Observable 第一次訂閱：${data}`),
      complete:() => console.log('第一次訂閱完成')
    })

    // this.youtuber$.next(1);  
    // if (this.observerBSubscription) {
    //   this.observerBSubscription.unsubscribe();
    // }
    // this.youtuber$.next(2);

  }

  ngOnDestroy(): void {
    

  }

}
