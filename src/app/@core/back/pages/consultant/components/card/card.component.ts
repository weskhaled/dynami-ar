
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from '../../../../../../models/consultant';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialog } from '../dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'user-card',
  templateUrl: './card.html',
  styleUrls: ['./style.scss']
})
export class UserCard implements OnInit {
  @Input() consultant: Consultant;
  @Output() reloadCosultant = new EventEmitter<string>();
  constructor(
    public dialogdeleteconsultant: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit() {
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
}