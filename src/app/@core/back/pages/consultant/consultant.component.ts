import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer,
  ViewChild,
  Renderer2
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective
} from "ngx-perfect-scrollbar";
import { SeoService } from "../../../../@services/front/seo.services";
import { ConsultantService } from "../../../../@services/admin/consultant.service";
import { PageEvent, MatDialog, MatSnackBar } from "@angular/material";
import { Page } from "../../../../models/page";
import { AddConsultantDialog } from "./components/dialog/dialog-add-consultant/dialog-add-consultant.component";
@Component({
  selector: "ConsultComponent",
  templateUrl: "./consultant.html",
  styleUrls: ["./style.scss"]
})
export class ConsultantComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  public loading = false;
  public consultants = [
    // {
    //   id: 1,
    //   name: "Hatem Smin",
    //   photo:
    //     "https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg",
    //   post: "Java developer ",
    //   company: "Dynamix",
    //   price: 4500,
    //   currency: "Euro",
    //   skype: "hsmin",
    //   phone: "+216 33445554",
    //   wokrpermit: "15/02/2018"
    // }
  ];
  page = new Page();
  // MatPaginator Inputs
  length:number = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5];
  // MatPaginator Output
  public pageEvent: PageEvent;
  public searchq :string = '';

  constructor(
    private seo: SeoService,
    private renderer: Renderer2,
    public dialogaddconsultant: MatDialog,
    public snackBar: MatSnackBar,
    private consultantService: ConsultantService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }
  ngOnInit() {
    this.seo.generateTags({
      title: "Index Page",
      description:
        "Contact me through this awesome search engine optimized Angular component",
      image: "https://instafire-app.firebaseapp.com/assets/meerkat.jpeg",
      slug: "contact-page"
    });
    this.loading = false;
    this.getConsultants({ pageSize: this.pageSize, pageNumber: this.pageIndex });
  }
  ngAfterViewInit() {}
  getConsultants(pageInfo) {
    this.consultantService.getConsultants(pageInfo).subscribe(data => {
      // console.log(data);
      this.consultants = data.data;
      // console.log(this.searchq)
      if(this.searchq != ''){
        // this.length = data.page.totalSearchElements;
        this.length = data.total;
      } else {
        this.length = data.total;
      }
      this.pageIndex = data.current_page-1;
      this.pageSizeOptions = [this.length];
      if(this.length >= 5){
        this.pageSizeOptions.push(5)
      }
      if(this.length >= 25){
        this.pageSizeOptions.push(25)
      }
      if(this.length >= 50){
        this.pageSizeOptions.push(50)
      }
      this.loading = true;
    });
  }
  onPaginateChange(event) {
    // console.log(event);
    this.loading = false;
    this.getConsultants({ pageSize: event.pageSize, pageNumber: event.pageIndex,search: this.searchq });
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    // this.searchq = '';
  }
  search() {
    this.loading = false;
    let q = { pageSize: this.pageSize, pageNumber: 0, search: this.searchq };
    this.getConsultants(q);
  }
  addnew() {
    const dialogaddconsultantRef = this.dialogaddconsultant.open(AddConsultantDialog, {
      minWidth: '40%',
      width: '60%',
    });
    dialogaddconsultantRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'add') {
          this.snackBar.open('Add', 'success', {
            duration: 2000,
          });
          this.getConsultants({ pageSize: this.pageSize, pageNumber: this.pageIndex,search: this.searchq });
        }
      }
    });
  }
}
