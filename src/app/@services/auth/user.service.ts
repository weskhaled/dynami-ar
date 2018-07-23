
import {throwError as observableThrowError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../models/index';
import { AuthenticationService } from './authentication.service';
import { ENV } from '../../@core/env';

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
        let options = {
          headers : new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.token})
        }
          // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get(ENV.URL_GET_USER, options).pipe(
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