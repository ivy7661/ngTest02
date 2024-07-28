import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StoreComponent } from './page/store/store.component';
import { AsideNavComponent } from './component/aside-nav/aside-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './page/hero/hero.component';
import { ProcessBarComponent } from "./shared/process-bar/process-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StoreComponent, RouterModule, HeroesComponent, AsideNavComponent, ProcessBarComponent],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngTest02';
  heroList:[]=[];

  constructor() {}

  ngOnInit(): void {

  }
}
