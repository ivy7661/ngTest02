import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSource = new Subject<string>();
  public userName$ = this.userNameSource.asObservable();

  public user = 'Tom';

  public getUserData(id: string, name: string): Observable<any> {
    return of({
      id: id,
      name: name
    })
  }

  public updateUserName(name :string) {
    this.userNameSource.next(name);
  }
}
