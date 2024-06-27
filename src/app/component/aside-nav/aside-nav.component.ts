import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  public isCollapsed = true;
  public visiblility = false;
  public toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.visiblility = !this.visiblility;
  }
}
