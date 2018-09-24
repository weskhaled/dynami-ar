
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
import { Consultant } from '../../models/consultant';

@Injectable()
export class ConsultantService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token })
    };

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }
    public getConsultants(args): Observable<any> {
        // get consultants from api
        return this.http.get(ENV.URL_CONSULTANTS, {
            params: args
        }).pipe(
            map((response: PagedData<Consultant>) => {
                return response;
            }));
    }
    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the client data
     */
    public getResults(page: Page): Observable<PagedData<Client>> {

        return this.http.get(ENV.URL_CLIENTS + '?pageNumber=' + Number(page.pageNumber) + '&pageSize=' + Number(page.size)).pipe(
            map((response:PagedData<Client>) => {
                const pagedData = new PagedData<Client>();
                page.totalElements = response.page.totalElements;
                page.totalPages = response.page.totalPages;
                for (let i = 0; i < response.data.length; i++){
                    const jsonObj = response.data[i];
                    pagedData.data.push(<Client>jsonObj);
                }
                pagedData.page = page;
                return pagedData;      
            }));
    }

    public update(client: Client, id: number): Observable<any> {
        return this.http.put(ENV.URL_CLIENTS+'/'+id, client, this.httpOptions).pipe(
            map((response: any) => response));
    }
    public delete(id: number): Observable<any> {
        return this.http.delete(ENV.URL_CONSULTANTS+'/'+id, this.httpOptions).pipe(
            map((response: any) => response));
    }
    public add(client: Client): Observable<any> {
        return this.http.post(ENV.URL_CLIENTS, client, this.httpOptions).pipe(
            map((response: any) => response));
    }
}