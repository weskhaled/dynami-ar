import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import { FormControl } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddClientDialog } from '../components/dialog/dialog-add-client/dialog-add-client.component';
import { EditClientDialog } from '../components/dialog/dialog-edit-client/dialog-edit-client.component';
import { ConfirmDialog } from '../components/dialog/dialog-confirm/dialog-confirm.component';
import { Page } from '../../../../models/page';
import { Client } from '../../../../models/client';
import { SeoService } from '../../../../@services/front/seo.services';
import { ClientService } from '../../../../@services/admin/client.service';
import { MockServerResultsService } from '../../../../@services/admin/mock-server-results-service';
@Component({
  selector: 'ClientComponent',
  templateUrl: './client.html',
  styleUrls: ['./style.scss']
})
export class ClientComponent implements AfterViewInit, OnInit {
  page = new Page();
  rows = new Array<Client>();
  @ViewChild('myTable') table;

  public isLoading: boolean = false;
  constructor(
    private seo: SeoService,
    private renderer: Renderer2,
    public dialogaddclient: MatDialog,
    public dialogeditclient: MatDialog,
    public dialogdeleteclient: MatDialog,
    public snackBar: MatSnackBar,
    private el: ElementRef,
    private clientService: ClientService,
    private serverResultsService: MockServerResultsService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    });
    this.setPage({ offset: 0, pageSize: 10 });
  }
  ngAfterViewInit() {
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo){
    this.isLoading = true;
    this.page.pageNumber = pageInfo.offset;
    this.clientService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
      this.isLoading = false;
    });
  }

  addnew() {
    const dialogaddclientRef = this.dialogaddclient.open(AddClientDialog, {
      minWidth: '40%',
      width: '60%',
    });
    dialogaddclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'add') {
          this.snackBar.open('Add', 'success', {
            duration: 2000,
          });
          // this.setPage({ offset: this.page.pageNumber });
          this.setPage({ offset: this.page.pageNumber, pageSize: 10 });
        }
      }
    });
  }
  deleteclient(row) {
    const dialogdeleteclientRef = this.dialogdeleteclient.open(ConfirmDialog, {
      panelClass: '',
      minWidth: '20%',
      width: '30%',
      data: row,
    });
    dialogdeleteclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'delete') {
          this.snackBar.open('Delete', 'success', {
            duration: 2000,
          });
          this.setPage({ offset: 0, pageSize: 10 });
        }
      }
    });
  }
  editclient(row) {
    const dialogeditclientRef = this.dialogeditclient.open(EditClientDialog, {
      minWidth: '40%',
      width: '60%',
      data: row,
    });
    dialogeditclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'update') {
          this.snackBar.open('Update', 'success', {
            duration: 2000,
          });
          // this.setPage({ offset: this.page.pageNumber });
          this.setPage({ offset: this.page.pageNumber, pageSize: 10 });
        }
      }
    });
  }
}