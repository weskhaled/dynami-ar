
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AuthenticationService } from '../auth/authentication.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PagedData } from '../../models/paged-data';
import { Client } from '../../models/client';
import { ENV } from '../../@core/env';
import { Company } from '../../models/company';

@Injectable()
export class CompanyService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token })
    };

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }
    // get
    public getCompanies(args): Observable<any> {
        // get company from api
        return this.http.get(ENV.URL_COMPANIES, {
            params: args
        }).pipe(
            map((response: PagedData<Company>) => {
                return response;
            }));
    }
    // update
    public update(company: Company, id: number): Observable<any> {
        return this.http.put(ENV.URL_COMPANIES+'/'+id, company, this.httpOptions).pipe(
            map((response: any) => response));
    }
    // delete
    public delete(id: number): Observable<any> {
        return this.http.delete(ENV.URL_COMPANIES+'/'+id, this.httpOptions).pipe(
            map((response: any) => response));
    }
    // add
    public add(company: Company): Observable<any> {
        return this.http.post(ENV.URL_COMPANIES, company, this.httpOptions).pipe(
            map((response: any) => response));
    }
}