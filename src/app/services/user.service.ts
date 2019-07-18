import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:variable-name
  public _user: any;
  public loggedIn: boolean;

  constructor(private http: HttpClient) {
    this.loggedIn = false;
    this._user = null;
  }

  public login(data: {club_premier_id: string, accepts_terms: boolean}) {
    return this.http.post('users/login/', data)
      .pipe(
        map((response: any) => response.data),
        catchError(err => {
          console.log('login error', err);
          return throwError(err);
        })
      );
  }

  set user(user: any) {
    this._user = user;
    this.loggedIn = true;
    localStorage.setItem('user', JSON.stringify(user));
  }

  get user() {
    return this._user;
  }

}
