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
import { CompanyService } from "../../../../@services/admin/company.service";
import { PageEvent, MatDialog, MatSnackBar } from "@angular/material";
import { Page } from "../../../../models/page";
import { AddCompanyDialog } from "./components/dialog/dialog-add-company/dialog-add-company.component";
@Component({
  selector: "CompanyComponent",
  templateUrl: "./company.html",
  styleUrls: ["./style.scss"]
})
export class CompanyComponent implements OnInit {
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
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  public pageEvent: PageEvent;
  public searchq :string = '';

  constructor(
    private seo: SeoService,
    private renderer: Renderer2,
    public dialogaddcompany: MatDialog,
    public snackBar: MatSnackBar,
    private companyService: CompanyService
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
    this.getConsultants({ pageSize: this.pageSize, pageNumber: this.pageIndex });
  }
  ngAfterViewInit() {}
  getConsultants(pageInfo) {
    this.companyService.getCompanies(pageInfo).subscribe(data => {
      // console.log(data);
      this.consultants = data.data;
      this.length = data.page.totalElements;
      this.pageIndex = data.page.pageNumber;
      this.loading = true;
    });
  }
  onPaginateChange(event) {
    // console.log(event);
    this.loading = false;
    this.getConsultants({ pageSize: event.pageSize, pageNumber: event.pageIndex });
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.searchq = '';
  }
  search() {
    this.loading = false;
    let q = { pageSize: -1, pageNumber: 0, search: this.searchq };
    this.companyService.getCompanies(q).subscribe(data => {
      this.consultants = data.data;
      this.length = data.page.totalElements;
      this.pageIndex = data.page.pageNumber;
      this.loading = true;
    });
  }
  addnew() {
    const dialogaddconsultantRef = this.dialogaddcompany.open(AddCompanyDialog, {
      minWidth: '40%',
      width: '60%',
    });
    dialogaddconsultantRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data == 'add') {
          this.snackBar.open('Add', 'success', {
            duration: 2000,
          });
          this.getConsultants({ pageSize: this.pageSize, pageNumber: this.pageIndex });
        }
      }
    });
  }
}
