import { Component, OnInit } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { fromEvent } from 'rxjs';


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
      console.log(`觸發!`);
      console.log(data);
      
    })
  

  }
}
