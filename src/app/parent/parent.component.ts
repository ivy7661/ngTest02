import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  public message:string='';
  public rxMessage:string='';

  constructor(private user: UserService) {}

  ngOnInit(): void {
      
  }

  receiveMessage($event:string) {
    this.message = $event;
  }
  receiveRxMessage(event:string) {
    this.message = event;
  }

  public sendData(): void {
    this.user.updateYoutuber(100);
  }
}
