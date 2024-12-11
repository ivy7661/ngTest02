import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GrandsonComponent } from '../grandson/grandson.component';
import { NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MethodComponent } from '../method/method.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, GrandsonComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, MethodComponent, NgFor, NgClass],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})

export class ChildComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
  }
}
