import { Component, ElementRef, inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { JsonPipe, KeyValue, NgClass, NgFor ,NgIf,NgStyle,NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilityButtonDirective } from '../../@directive/utility-button.directive';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-source',
  standalone: true,
  imports: [NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgTemplateOutlet, JsonPipe, FormsModule, UtilityButtonDirective, NgStyle, KeyValuePipe],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit {

  public num = 123;
  public str = this.num.toString();
  ngOnInit(): void {
    console.log(this.str);
    console.log(typeof this.str);


  }

}
