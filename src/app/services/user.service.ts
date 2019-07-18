import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:variable-name
  private _user: any;
  public loggedIn: boolean;

  constructor(private http: HttpClient, private injector: Injector) {
    this.loggedIn = false;
    this._user = null;
  }

  set user(user: any) {
    this._user = user;
    this.loggedIn = true;
    localStorage.setItem('user', JSON.stringify(user));
    console.log('user set', this._user);
  }

  get user() {
    return this._user;
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

  public getSavedSession(): Promise<any> {
    return new Promise((resolve, reject) => {
      const u: string = localStorage.getItem('user');
      if (u !== undefined && u !== null) {
        this.user = JSON.parse(u);
      }
      resolve();
    });
  }

  public logout() {
    const router = this.injector.get(Router);
    this.loggedIn = false;
    this._user = null;
    localStorage.clear();
    router.navigate(['/']);
  }

}
