import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StoreComponent } from './page/store/store.component';
import { HeroesComponent } from './page/hero/hero.component';
import { ParentComponent } from './page/parent/parent.component';
import { SubscribeComponent } from './page/subscribe/subscribe.component';
import { SourceComponent } from './page/source/source.component';
import { ParamComponent } from './page/param/param.component';
import { SystemComponent } from './page/system/system.component';
import { SystemGroupComponent } from './page/system-group/system-group.component';
import { EletronicClockComponent } from './page/eletronic-clock/eletronic-clock.component';
import { DrivenFormComponent } from './page/driven-form/driven-form.component';
import { ReactiveFormComponent } from './page/reactive-form/reactive-form.component';
import { CounterComponent } from './page/counter/counter.component';
import { TodoComponent } from './page/todo/todo.component';
import { MissionControlComponent } from './page/mission-control/mission-control.component';
import { userResolver } from './@resolves/user.resolver';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './@guard/auth.guard';

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
    path:'param/:id/:name',
    component:ParamComponent,
    resolve: {
      userData: userResolver
    }
  },
  {
    path:'system',
    component:SystemComponent,
    // canActivate: [AuthGuard],
  },
  {
    path:'systemGroup',
    component:SystemGroupComponent,
  },
  {
    path:'eletronicClock',
    component:EletronicClockComponent
  },
  {
    path:'drivenForm',
    component:DrivenFormComponent
  },
  {
    path:'reactiveForm',
    component:ReactiveFormComponent
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'astronautMission',
    component: MissionControlComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: "**",
    component: HomeComponent,
  },
];
