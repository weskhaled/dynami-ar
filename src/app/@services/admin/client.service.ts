
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AuthenticationService } from '../auth/authentication.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Page } from '../../models/page';
import { PagedData } from '../../models/paged-data';
import { Client } from '../../models/client';
import { ENV } from '../../@core/env';

@Injectable()
export class ClientService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token })
    };

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }
    public getClients(): Observable<any> {
        // add authorization header with jwt token
        // let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get(ENV.URL_CLIENTS, this.httpOptions).pipe(
            map((response: Response) => response.json()));
    }
    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    public getResults(page: Page): Observable<PagedData<Client>> {
        // return of(this.companyData).pipe(map(data => this.getPagedData(page)));
        // return getPagedData(page);
        return this.http.get(ENV.URL_CLIENTS + '?pageNumber=' + Number(page.pageNumber) + '&pageSize=' + Number(page.size)).pipe(
            map((response:PagedData<Client>) => {
                const pagedData = new PagedData<Client>();
                page.totalElements = response.page.totalElements;
                page.totalPages = response.page.totalPages;
                // const start = page.pageNumber * page.size;
                // const end = Math.min((start + page.size), page.totalElements);
                for (let i = 0; i < response.data.length; i++){
                    const jsonObj = response.data[i];
                    // const employee = new Client(jsonObj.id, jsonObj.firstname, jsonObj.lastname,jsonObj.age,jsonObj.description);
                    pagedData.data.push(<Client>jsonObj);
                }
                pagedData.page = page;
                return pagedData;      
            }));
    }

    public update(client: Client, id: number): Observable<any> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.put(ENV.URL_CLIENTS+'/'+id, client, this.httpOptions).pipe(
            map((response: any) => response));
    }
    public delete(id: number): Observable<any> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.delete(ENV.URL_CLIENTS+'/'+id, this.httpOptions).pipe(
            map((response: any) => response));
    }
    public add(client: Client): Observable<any> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.post(ENV.URL_CLIENTS, client, this.httpOptions).pipe(
            map((response: any) => response));
    }
}