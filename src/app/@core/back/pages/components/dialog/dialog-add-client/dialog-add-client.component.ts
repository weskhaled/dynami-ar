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
  selector: 'dialog-add-client',
  templateUrl: 'dialog-add-client.html',
  styleUrls: ['style.scss']
})
export class AddClientDialog {
  public title = 'Ajouter Client';
  public client:Client = new Client(null,'','',null,'') ;
  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<AddClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }
  add(){
    this.clientService.add(this.client)
    .subscribe(data => {
      if(data.status == 'success'){
        this.dialogRef.close({data:'add'});
      }
    });
  }
}