import { AfterViewInit, Component, HostBinding, HostListener, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { ChildComponent } from '../../component/child/child.component';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  public count = signal(0);

  public parentCount = 0;
  public value = '';


  ngOnInit(): void {
  }

  public addCount() {
    this.count.set(this.count()+1);
  }

}
