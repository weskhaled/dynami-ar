
import {throwError as observableThrowError ,  Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../models/index';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.token})
      };
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<any> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('https://weslati-khaled.herokuapp.com/api/v1/user', this.httpOptions).pipe(
            map((response: any) => {
                let res = response;
                return res;
            }),
            catchError(e => {
                if (e.status === 401) {
                    return observableThrowError('Unauthorized');
                }
                // do any other checking for statuses here
            }),);
    }
    getClients(): Observable<any> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://medicallabs.wes/api/v1/clients', this.httpOptions).pipe(
            map((response: Response) => response.json()));
    }
}