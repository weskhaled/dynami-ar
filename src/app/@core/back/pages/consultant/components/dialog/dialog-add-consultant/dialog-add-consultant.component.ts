import { Component, OnInit, OnDestroy, Inject, ViewChild, Input } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Consultant } from '../../../../../../../models/consultant';
import { ConsultantService } from '../../../../../../../@services/admin/consultant.service';

@Component({
  selector: 'dialog-add-consultant',
  templateUrl: 'dialog-add-consultant.html',
  styleUrls: ['style.scss']
})
export class AddConsultantDialog {
  public title = 'Ajouter Consultant';
  public consultant:Consultant = new Consultant(null,'','','','',null,'','','','') ;
  constructor(
    private consultantService: ConsultantService,
    public dialogRef: MatDialogRef<AddConsultantDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }
  add(){
    // this.consultantService.add(this.consultant)
    // .subscribe(data => {
    //   if(data.status == 'success'){
    //     this.dialogRef.close({data:'add'});
    //   }
    // });
  }
}