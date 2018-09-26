
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from '../../../../../../models/consultant';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialog } from '../dialog/dialog-confirm/dialog-confirm.component';
import { AddConsultantDialog } from '../dialog/dialog-add-consultant/dialog-add-consultant.component';

@Component({
  selector: 'user-card',
  templateUrl: './card.html',
  styleUrls: ['./style.scss']
})
export class UserCard implements OnInit {
  @Input() consultant: Consultant;
  private  originalconsultant: Consultant;
  @Output() reloadCosultant = new EventEmitter<string>();
  constructor(
    public dialogdeleteconsultant: MatDialog,
    public dialogeditclientRef: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.originalconsultant = Object.assign({}, this.consultant);
  }
  deleteconsultant(consultant) {
    const dialogdeleteclientRef = this.dialogdeleteconsultant.open(ConfirmDialog, {
      panelClass: '',
      minWidth: '20%',
      width: '30%',
      data: consultant,
    });
    dialogdeleteclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'delete') {
          this.snackBar.open('Delete', 'success', {
            duration: 2000,
          });
          this.reloadCosultant.next();
          // this.setPage({ offset: 0, pageSize: 10 });
        }
      }
    });
  }
  editconsultant(consultant) {
    const dialogeditclientRef = this.dialogdeleteconsultant.open(AddConsultantDialog, {
      panelClass: '',
      minWidth: '320px',
      width: '70%',
      data: consultant,
    });
    dialogeditclientRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'update') {
          this.snackBar.open('Update', 'success', {
            duration: 2000,
          });
          this.reloadCosultant.next();
        }
      } else {
        // return to the original consultant
        this.consultant = Object.assign({}, this.originalconsultant);
      }
    });
  }
}