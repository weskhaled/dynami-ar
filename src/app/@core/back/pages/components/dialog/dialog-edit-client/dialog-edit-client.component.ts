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
  selector: 'dialog-edit-client',
  templateUrl: 'dialog-edit-client.html',
  styleUrls: ['style.scss']
})
export class EditClientDialog {
  public title = 'Editer Client Info';
  private client:Client;
  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<EditClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.client = this.data;
  }
  ngOnInit() {
  }
  update(){
    this.clientService.update(this.client,this.client.id)
    .subscribe(data => {
      if(data.status == 'success'){
        this.dialogRef.close({data:'update'});
      }
    });
  }
}