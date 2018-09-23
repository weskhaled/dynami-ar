import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { ENV } from '../../@core/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    public token: string;
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
    };
    constructor(private http: HttpClient) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        var datalogin: any = {
            grant_type: 'password',
            client_id: ENV.client_id,
            client_secret: ENV.client_secret,
            username: username,
            password: password
        }
        return this.http.post<boolean>(ENV.URL_TOKEN, datalogin).pipe(
            map((response: any) => {
                // this.log(`added hero w/ id=${hero.id}`)
                //   console.log(!!response.access_token);
                let res = response;
                // login successful if there's a jwt token in the response
                let token = response.access_token;
                if (!!token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    localStorage.setItem('refresh_token', response.refresh_token);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
        );
        // return this.http.post(ENV.URL_TOKEN, datalogin).pipe(
        //     map((response: Response) => {
        //         console.log(response);
        //         let res = response;
        //         // login successful if there's a jwt token in the response
        //         let token = res.access_token;
        //         if (token) {
        //             // set token property
        //             this.token = token;

        //             // store username and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
        //             localStorage.setItem('refresh_token', response.json().refresh_token);
        //             // return true to indicate successful login
        //             return true;
        //         } else {
        //             // return false to indicate failed login
        //             return false;
        //         }
        //     });
    }
    logoutuser(): Observable<boolean> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        // let options = new RequestOptions({ headers: headers });
        const httpToken = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(ENV.URL_LOGOUT, httpToken).pipe(
            map((response: any) => {
                if (response) {
                    // clear token remove user from local storage to log user out
                    this.token = null;
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('refresh_token');
                    return true;
                } else {
                    return false;
                }
            }));
    }

    logout() {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('refresh_token');
    }
}