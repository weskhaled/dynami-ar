import { Component, OnDestroy, Inject, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Consultant } from '../../../../../../../models/consultant';
import { ConsultantService } from '../../../../../../../@services/admin/consultant.service';

@Component({
  selector: 'dialog-add-consultant',
  templateUrl: 'dialog-add-consultant.html',
  styleUrls: ['style.scss']
})
export class AddConsultantDialog {
  public title = 'Ajouter Consultant';
  public selectedValue: string;

  public currencies: any[] = [
    {value: 'euro', viewValue: 'EURO'},
    {value: 'usd', viewValue: 'USD'},
    {value: 'dt', viewValue: 'DT'}
  ];
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