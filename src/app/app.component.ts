import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreComponent, HttpClientModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngTest02';
}