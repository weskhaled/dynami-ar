import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Company } from '../../../../../../../models/company';
import { CompanyService } from '../../../../../../../@services/admin/company.service';
@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
  styleUrls: ['style.scss']
})
export class ConfirmDialog {
  public title = 'are you want to delete this Company ?';
  public company:Company;
  constructor(
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.company = this.data;
  }
  ngOnInit() {
  }
  delete(){
    this.companyService.delete(this.company.id)
    .subscribe(data => {
      if(data.status == 'success'){
        this.dialogRef.close({data:'delete'});
      }
    });
  }
}