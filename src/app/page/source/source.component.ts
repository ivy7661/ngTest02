import { Component, OnInit } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { Subscription, fromEvent,of,map,combineLatest, interval } from 'rxjs';
import { NgClass, NgFor ,NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
interface LaunchItem {
  Type?: string;
  Status: string;
  LaunchTime: number | null;
  TotalTool: string[];
  LaunchTool: string[];
}

interface IData {
  [key:string]: LaunchItem;
}

interface ResultDataItem {
  key: string;
  value: LaunchItem;
}

type ResultData = ResultDataItem[];



@Component({
  selector: 'app-source',
  standalone: true,
  imports: [NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit{
  public control = 'drag';
  public status: string = 'Processing';
  public statusIcon = {
    'status-block_launch': this.status === 'launched',
    'status-block_offline': this.status === 'offline',
    'status-block_processing': this.status === 'Processing'
  }
  public data: IData = {
    Footprint: {
      Status: 'Launched',
      LaunchTime: null,
      TotalTool: [
        'Algo-163',
        'Algo-172',
      ],
      LaunchTool: [
        'Algo-163',
      ]
    },
    Symbol: {
      Status: 'Launched',
      LaunchTime: null,
      TotalTool: [
        'Algo-163',
        'Algo-172',
        'Algo-190',
      ],
      LaunchTool: [
        'Algo-172',
      ]
    },
  }

  public newData: ResultDataItem[] = [];

  ngOnInit(): void {
    const dateString = '2024-06-28';
    const date = new Date(dateString);
    const timestamp = date.getTime();
    console.log(timestamp);

    this.dealData();
    console.log(this.getDataArray());

  };

  public getDataArray(): ResultData {
    return Object.keys(this.data).map(key => ({
      key,
      value: this.data[key as keyof typeof this.data]
    }));
  }

  public changeStatus(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.status = selectElement.value;
    console.log(this.status);
  }

  public getStatusClass(): string {
    return `status-block_${this.status.toLowerCase()}`
  }

  public dealData() {
    this.data['Footprint'].Type = 'Footprint';

    // this.newData.push(this.data['Footprint']);
    // this.newData.push(this.data['Symbol']);
    let toolItems = Object.values(this.data);
    console.log(toolItems);

    this.newData = this.getDataArray() as ResultData;
    console.log(this.newData);
  }


}



// [
//   {
//     key: 'Footprint',
//     value: {
//       Status: 'Launched',
//       LaunchTime: null,
//       TotalTool: [
//         'Algo-163',
//         'Algo-172',
//       ],
//       LaunchTool: [
//         'Algo-163',
//       ]
//     }
//   },
//   {
//     key: 'Symbol',
//     value: {
//       Status: 'Launched',
//       LaunchTime: null,
//       TotalTool: [
//         'Algo-163',
//         'Algo-172',
//         'Algo-190',
//       ],
//       LaunchTool: [
//         'Algo-172',
//       ]
//     }
//   }
// ]
