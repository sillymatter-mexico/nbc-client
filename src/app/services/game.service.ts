import { Injectable } from '@angular/core';
import {catchError, map, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private userService: UserService) { }

  createGameSession(data: any) {
    return this.http.post( `users/${this.userService.user.uuid}/session/`, data)
      .pipe(
        map((response: any) => response.data),
        catchError(err => {
          console.log('create session error', err);
          return throwError(err);
        }),
        retry(3),
      );
  }

}
