import { Component, OnInit } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { Subscription, fromEvent,of,defer } from 'rxjs';


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
    const promiseFactory = () => new Promise((resolve)=> {
      console.log(`Promise被執行了`);
      setTimeout(()=> {
        resolve(100);
      },1000)
    })

    const deferSource$ = defer(promiseFactory);
    console.log(`示範用 defer 解決 Promise 問題：`);
    deferSource$.subscribe(result => {
      console.log(`Promise 結果:${result}`);
    })
    
  }
}
