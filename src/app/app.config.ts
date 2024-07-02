import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore,provideState } from '@ngrx/store';
import { counterReducer } from './core/store/reducer/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'count', reducer: counterReducer }),
  ]
};