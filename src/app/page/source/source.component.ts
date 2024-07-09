import { Component, OnInit } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { Subscription, fromEvent,of,map,combineLatest, interval } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [NgClass],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit{
  public status: string = 'Processing';
  public statusIcon = {
    'status-block_launch': this.status === 'launched',
    'status-block_offline': this.status === 'offline',
    'status-block_processing': this.status === 'Processing'
  }

  ngOnInit(): void {

  };
  public changeStatus(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.status = selectElement.value;
    console.log(this.status);
  }

  public getStatusClass(): string {
    return `status-block_${this.status.toLowerCase()}`
  }

  public alert() {
    alert('被點了！！')
  }

}
