
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../../../../models/company';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialog } from '../dialog/dialog-confirm/dialog-confirm.component';
import { AddCompanyDialog } from '../dialog/dialog-add-company/dialog-add-company.component';

@Component({
  selector: 'company-card',
  templateUrl: './card.html',
  styleUrls: ['./style.scss']
})
export class CompanyCard implements OnInit {
  @Input() company: Company;
  private  originalcompany: Company;
  @Output() reloadCosultant = new EventEmitter<string>();
  constructor(
    public dialogdeletecompany: MatDialog,
    public dialogeditclientRef: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.originalcompany = Object.assign({}, this.company);
  }
  deletecompany(company) {
    const dialogdeleteclientRef = this.dialogdeletecompany.open(ConfirmDialog, {
      panelClass: '',
      minWidth: '20%',
      width: '30%',
      data: company,
    });
    dialogdeleteclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'delete') {
          this.snackBar.open('Delete', 'success', {
            duration: 2000,
          });
          // this.reloadCosultant.next();
          // this.setPage({ offset: 0, pageSize: 10 });
        }
      }
    });
  }
  Clickedtest(){
    console.log('test');
  }
  editconsultant(consultant) {
    const dialogeditcompanyRef = this.dialogdeletecompany.open(AddCompanyDialog, {
      panelClass: '',
      minWidth: '320px',
      width: '70%',
      data: consultant,
    });
    dialogeditcompanyRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'update') {
          this.snackBar.open('Update', 'success', {
            duration: 2000,
          });
          // this.reloadCosultant.next();
        }
      } else {
        // return to the original consultant
        this.company = Object.assign({}, this.originalcompany);
      }
    });
  }
}