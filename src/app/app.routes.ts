import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StoreComponent } from './page/store/store.component';
import { HeroesComponent } from './page/hero/hero.component';
import { ParentComponent } from './page/parent/parent.component';
import { SubscribeComponent } from './page/subscribe/subscribe.component';
import { SourceComponent } from './page/source/source.component';
import { ParamComponent } from './page/param/param.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch: "full",
  },
  {
    path:'store',
    component:StoreComponent
  },
  {
    path:'hero',
    component:HeroesComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'subscribe',
    component:SubscribeComponent
  },
  {
    path:'source',
    component:SourceComponent
  },
  {
    path:'param',
    component:ParamComponent
  },
  {
    path: "**",
    component: HomeComponent,
  },
];