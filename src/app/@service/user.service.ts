import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = 'Tom';

  public getUserData(id: string, name: string): Observable<any> {
    return of({
      id: id,
      name: name
    })
  }
}
