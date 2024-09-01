import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetMethodService {
  public methodSubject = new Subject();
  public methodSubject$ = this.methodSubject.asObservable();

  public setMethod(method: string) {
    this.methodSubject.next(method);
  }

}
