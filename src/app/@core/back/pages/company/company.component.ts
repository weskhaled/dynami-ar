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
import { Company } from "../../../../models/company";
@Component({
  selector: "CompanyComponent",
  templateUrl: "./company.html",
  styleUrls: ["./style.scss"]
})
export class CompanyComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  public loading = false;
  public companies:Company[] = [
    {
      id: 1,
      name: "Hatem Smin",
      company_name: "Dynamix-it",
      business_type: "No Type",
      phone: "+(216)557773443",
      sector:"No Sector",
      mail:"wes@test.test",
      creation:"554557773443",
      description:"No Description"
    },
    {
      id: 2,
      name: "Oueslati Khaled",
      company_name: "Peaksource",
      business_type: "No Type",
      phone: "+(216)557773443",
      sector:"No Sector",
      mail:"wes@test.test",
      creation:"554557773443",
      description:"No Description"
    },
    {
      id: 1,
      name: "Hatem Smin",
      company_name: "Dynamix-it",
      business_type: "No Type",
      phone: "+(216)557773443",
      sector:"No Sector",
      mail:"wes@test.test",
      creation:"554557773443",
      description:"No Description"
    },
    {
      id: 2,
      name: "Oueslati Khaled",
      company_name: "Peaksource",
      business_type: "No Type",
      phone: "+(216)557773443",
      sector:"No Sector",
      mail:"wes@test.test",
      creation:"554557773443",
      description:"No Description"
    },
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
  }
  ngAfterViewInit() {}
  onPaginateChange(event) {
    // console.log(event);
    this.loading = false;
  }
  search() {
    this.loading = false;
    let q = { pageSize: this.pageSize, pageNumber: 0, search: this.searchq };
    // this.getCompanies(q);
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
          // this.getConsultants({ pageSize: this.pageSize, pageNumber: this.pageIndex,search: this.searchq });
        }
      }
    });
  }
}
