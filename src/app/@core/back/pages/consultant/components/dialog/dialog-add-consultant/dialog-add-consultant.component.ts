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
    { value: 'EURO', viewValue: 'EURO' },
    { value: 'USD', viewValue: 'USD' },
    { value: 'DT', viewValue: 'DT' }
  ];
  public consultant: Consultant = new Consultant(null, '', '', '', '', null, '', '', '', '');
  constructor(
    private consultantService: ConsultantService,
    public dialogRef: MatDialogRef<AddConsultantDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.consultant = data;
    }
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.consultant);
    if(this.consultant.id == null){
      this.consultantService.add(this.consultant)
      .subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close({data:'add'});
        }
      });
    } else {
      this.consultantService.update(this.consultant,this.consultant.id)
      .subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close({data:'update'});
        }
      });
    }
  }
}