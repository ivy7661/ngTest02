import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { HeroesComponent } from './hero/hero.component';
import { ParentComponent } from './parent/parent.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SourceComponent } from './source/source.component';
import { ParamComponent } from './param/param.component';

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