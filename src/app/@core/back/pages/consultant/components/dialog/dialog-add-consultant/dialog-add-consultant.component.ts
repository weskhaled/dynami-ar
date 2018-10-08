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
  public url:any = '';
  public local_photo:any = '';
  public photo:any='';
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
    this.photo = this.consultant.photo;
    if(this.consultant.photo!=''){
      this.local_photo = this.consultant.photo;
    }
  }
  onSelectFile(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.photo = JSON.parse(JSON.stringify(
          {
            filename: file.name,
            filetype : file.type,
            base64: (reader.result as string).split(',')[1]
          }));
          // this.url = photo;
          // this.url = {'background-image':  'url(data:'+photo.type+';base64,'+photo.base64+')'};
          this.local_photo = 'data:'+this.photo.filetype+';base64,'+this.photo.base64;
          // console.log(JSON.parse(JSON.stringify({filename: file.name, filetype : file.type, base64: (reader.result as string).split(',')[1]})));
        };
    }
  }
  onSubmit() {
    console.log(this.consultant);
    this.consultant.photo = this.photo;
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