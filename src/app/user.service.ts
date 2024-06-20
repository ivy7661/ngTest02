import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private youtuber = new Subject<number>();
  public youtuber$ = this.youtuber.asObservable();


  public updateYoutuber(data: number): void {
    this.youtuber.next(data);
  }



  constructor() { }

}
