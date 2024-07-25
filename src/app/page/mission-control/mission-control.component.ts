import { NgFor } from '@angular/common';
import { AstronautComponent } from '../../component/astronaut/astronaut.component';
import { MissionService } from './../../@service/mission.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-control',
  standalone: true,
  imports: [AstronautComponent, NgFor],
  templateUrl: './mission-control.component.html',
  styleUrl: './mission-control.component.scss'
})
export class MissionControlComponent {
  public astronauts = ['Lovell', 'Swigert', 'Haise'];
  public history: string[] = [];
  public missions = [
    'Fly to the moon！',
    'Fly to the Mars！',
    'Fly to the Vegas！'
  ];
  public nextMission = 0;

  constructor(private missionService: MissionService) {
    // 在父元件訂閱了 確認的 Observable
    this.missionService.missionConfirmed$.subscribe(
      astronauts => {
        this.history.push(`${astronauts} confirmed the mission`);
      }
    )
  }

  public announce() {
    const mission = this.missions[this.nextMission++];
    // 呼叫了service 中 next 新 mission 的函式
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission} annouced"`);
    if(this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
