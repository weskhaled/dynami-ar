import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../../models/page';
import { PagedData } from '../../models/paged-data';
// import { CorporateEmployee } from '../../models/corporate-employee';
import { Client } from '../../models/client';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
// const companyData = require('../../../assets/data/company.json');
/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerResultsService {
    companyData = [
    ];

    constructor(
        private http: HttpClient) {
    }    
    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    public getResults(page: Page): Observable<PagedData<Client>> {
        // return of(this.companyData).pipe(map(data => this.getPagedData(page)));
        // return getPagedData(page);
        return this.http.get('http://medicallabs.wes/api/v1/clients' + '?pageNumber=' + Number(page.pageNumber) + '&pageSize=' + Number(page.size)).pipe(
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

    /**
     * Package companyData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from companyData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    // private getPagedData(page: Page): PagedData<CorporateEmployee> {
    //     const pagedData = new PagedData<CorporateEmployee>();

    //     page.totalElements = this.companyData.length;
    //     page.totalPages = page.totalElements / page.size;
    //     const start = page.pageNumber * page.size;
    //     const end = Math.min((start + page.size), page.totalElements);
    //     for (let i = start; i < end; i++){
    //         const jsonObj = this.companyData[i];
    //         const employee = new CorporateEmployee(jsonObj.name, jsonObj.gender, jsonObj.company, jsonObj.age);
    //         pagedData.data.push(employee);
    //     }
    //     pagedData.page = page;
    //     return pagedData;
    // }

}