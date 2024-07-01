import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../../component/child/child.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  // @ViewChild(ChildComponent) childComponent!:ChildComponent;

  public message:string='';
  public rxMessage:string='';
  public projectData = {
    name:'',
    status:''
  };
  

  constructor(private user: UserService) {}

  ngOnInit(): void {
      
  }
  callChildMethod(tChild: ChildComponent):void {
    tChild.sayHello();
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

  public handleUpload(data:any) {
    this.projectData.name=data.name;
    this.projectData.status=data.status;
  }
}
