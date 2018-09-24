import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Consultant } from '../../../../../../../models/consultant';
import { ConsultantService } from '../../../../../../../@services/admin/consultant.service';
@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
  styleUrls: ['style.scss']
})
export class ConfirmDialog {
  public title = 'are you want to delete this consultant ?';
  public consultant:Consultant;
  constructor(
    private consultantService: ConsultantService,
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.consultant = this.data;
  }
  ngOnInit() {
  }
  delete(){
    this.consultantService.delete(this.consultant.id)
    .subscribe(data => {
      if(data.status == 'success'){
        this.dialogRef.close({data:'delete'});
      }
    });
  }
}