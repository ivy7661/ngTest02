import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-process-bar',
  animations:[
    trigger('startEnd',[
      state('start', style({
        width: '0%'
      })),
      state('80', style({
        width: '80%'
      })),
      state('end', style({
        width: '100%'
      })),
      transition('* => 80', [
        animate('10s')
      ]),
      transition('* => end', [
        animate('0.3s')
      ])
    ])
  ],
  standalone: true,
  imports: [NgIf],
  templateUrl: './process-bar.component.html',
  styleUrl: './process-bar.component.scss'
})
export class ProcessBarComponent implements OnInit{
  public status: string = 'start';
  public show: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(
      () => {
        this.status = 'start';
        this.show = true;
        this.status = '80';
      }
    )

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.status = 'end';
      setTimeout(() => {
        this.status = 'start';
        this.show = false;
      }, 300)
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);  // 確保只有在瀏覽器環境中執行
      }
    })
  }
}
