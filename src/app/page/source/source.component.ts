import { AfterViewInit, Component,computed,ElementRef,HostListener,inject,OnInit, QueryList, signal, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-source',
  standalone: true,
  imports: [ FormsModule, PortalModule, NgIf, NgFor, NgTemplateOutlet],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit {
  private timer: any = null;

  ngOnInit(): void {

  }

  private performSearch(query: string): void {
    console.log('Search for', query);
    // call api
  }

  public onSearch(value: string): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.performSearch(value);
      this.timer = null
    }, 500)
  }

  public debounce(fn: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return (...args: any[]) => {
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(() => {
        fn(...args);
      }, delay)
    }
  }
  
  public debounceSearch = this.debounce((value: string) => {
    this.performSearch(value);
  }, 500);
}
