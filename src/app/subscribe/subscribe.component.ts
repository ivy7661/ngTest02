import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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



  constructor(private user:UserService) {};

  ngOnInit(): void {
    this.youtuber$.subscribe(res => {
      console.log(res);
    });


    // this.youtuber$.next(1);  
    // if (this.observerBSubscription) {
    //   this.observerBSubscription.unsubscribe();
    // }
    // this.youtuber$.next(2);

  }

  ngOnDestroy(): void {
    

  }

}
