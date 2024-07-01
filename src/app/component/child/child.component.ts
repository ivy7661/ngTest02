import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Subject,fromEvent,Subscription,of, interval, pairwise, take } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnInit{
  @Output() messageEvent = new EventEmitter<string>();
  @Output() rxMessageEvent = new Subject<string>();
  @Output() uploadProjectData:EventEmitter<any> = new EventEmitter<any>();
  public donateAmount = [100,500,300];

 ngOnInit(): void {
  of(1,2,3).pipe(
    pairwise()
  ).subscribe(data => {console.log(`pairwise:${data}`)
  })
 }

  public uploadData() {
    const projectData = {
      name:'New Project',
      status:'In Progress'
    };
    this.uploadProjectData.emit(projectData);
  }

  public sayHello(): void {
    console.log('Hello from child！');
  }


}
