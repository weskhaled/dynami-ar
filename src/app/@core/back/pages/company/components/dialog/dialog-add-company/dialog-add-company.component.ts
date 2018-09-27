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
  public title = 'Ajouter Company';
  public selectedValue: string;
  public url:any = '';
  public currencies: any[] = [
    { value: 'EURO', viewValue: 'EURO' },
    { value: 'USD', viewValue: 'USD' },
    { value: 'DT', viewValue: 'DT' }
  ];
  public company: Company = new Company(null, '', '', '', '', null, '', '', '', '');
  constructor(
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<AddCompanyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.company = data;
    }
  }
  ngOnInit() {
  }
  onSelectFile(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        let photo = JSON.parse(JSON.stringify(
          {
            filename: file.name,
            filetype : file.type,
            base64: (reader.result as string).split(',')[1]
          }));
          // this.url = photo;
          // this.url = {'background-image':  'url(data:'+photo.type+';base64,'+photo.base64+')'};
          // console.log(JSON.parse(JSON.stringify({filename: file.name, filetype : file.type, base64: (reader.result as string).split(',')[1]})));
      };
    }
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