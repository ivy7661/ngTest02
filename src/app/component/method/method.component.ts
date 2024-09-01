import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SetMethodService } from '../../@service/set-method.service';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, FormsModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss'
})
export class MethodComponent {
  public setMethodService = inject(SetMethodService);
  public currentMethod = '';

  public setMethod(method: string) {
    this.setMethodService.setMethod(method);
  }
}
