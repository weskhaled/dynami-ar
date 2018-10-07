import { Component, OnDestroy, Inject, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Company } from '../../../../../../../models/company';
import { CompanyService } from '../../../../../../../@services/admin/company.service';

@Component({
  selector: 'dialog-add-company',
  templateUrl: 'dialog-add-company.html',
  styleUrls: ['style.scss']
})
export class AddCompanyDialog {
  public title = 'Company';
  public company: Company = new Company(null, '', '', '', '', '', null, '', '');
  constructor(
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<AddCompanyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.company = data;
      console.log(data);
    }
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.company);
    if(this.company.id == null){
      this.companyService.add(this.company)
      .subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close({data:'add'});
        }
      });
    } else {
      this.companyService.update(this.company,this.company.id)
      .subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close({data:'update'});
        }
      });
    }
  }
}