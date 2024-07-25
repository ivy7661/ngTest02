import { MissionService } from './../../@service/mission.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  standalone: true,
  imports: [],
  templateUrl: './astronaut.component.html',
  styleUrl: './astronaut.component.scss'
})
export class AstronautComponent implements OnDestroy{
  @Input() public astronaut = '';
  public mission = '<no mission announced>';
  public isConfirmed = false;
  public isAnnounced = false;
  public announceSubscription!: Subscription;

  constructor(private missionService :MissionService) {
    // 在子元件訂閱了宣佈新任務的 Subscription
    this.announceSubscription = this.missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.isAnnounced = true;
        this.isConfirmed = false;
      }
    )
  }

  ngOnDestroy(): void {
    this.announceSubscription.unsubscribe();
  }

  public confirm() {
    this.isConfirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
}
