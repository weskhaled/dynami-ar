import { Component, OnInit, OnDestroy, Inject, ViewChild, Input } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Client } from '../../../../../../models/client';
import { ClientService } from '../../../../../../@services/admin/client.service';
@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
  styleUrls: ['style.scss']
})
export class ConfirmDialog {
  public title = 'are you want to delete this client ?';
  public client:Client;
  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.client = this.data;
  }
  ngOnInit() {
  }
  delete(){
    this.clientService.delete(this.client.id)
    .subscribe(data => {
      if(data.status == 'success'){
        this.dialogRef.close({data:'delete'});
      }
    });
  }
}