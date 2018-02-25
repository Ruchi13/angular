import { User } from './../data-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoginService {
  private loginUrl = 'api/login';
  constructor(private http: HttpClient) { }



   /** POST: add a new hero to the server */
   validateUserAndLogin(login: User): Observable<User> {
     console.log(login);
    return this.http.post<User>(this.loginUrl, login, httpOptions).pipe(
      tap(_ => this.log(`validate User with id=${login.name}`)),
      catchError(this.handleError<User>('validateUser'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}
