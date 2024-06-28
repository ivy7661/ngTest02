import { Component, OnInit } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { Subscription, fromEvent,of,map,combineLatest, interval } from 'rxjs';


@Component({
  selector: 'app-source',
  standalone: true,
  imports: [],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit{
  
  
  

  ngOnInit(): void {
    fromEvent(document,'click').subscribe(data => {
      console.log(data);
    })
  
    // const subscription=
    const sourceA$ = interval(1000).pipe(
      map(data => `A${data+1}`)
    );
    const sourceB$ = interval(2000).pipe(
      map(data => `B${data+1}`)
    );
    const sourceC$ = interval(3000).pipe(
      map(data => `C${data+1}`)
    );

    const subscription = combineLatest([sourceA$,sourceB$,sourceC$]).subscribe(data => console.log(`combineLast:${data}`)
    )
  };

}
