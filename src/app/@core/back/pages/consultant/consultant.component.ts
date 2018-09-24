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
import { PageEvent } from "@angular/material";
import { Page } from "../../../../models/page";
@Component({
  selector: "ConsultComponent",
  templateUrl: "./consultant.html",
  styleUrls: ["./style.scss"]
})
export class ConsultantComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  public consultants = [
    {
      name: "Hatem Smin",
      photo:
        "https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg",
      post: "Java developer ",
      company: "Dynamix",
      price: 4500,
      currency: "Euro",
      skype: "hsmin",
      phone: "+216 33445554",
      wokrpermit: "15/02/2018"
    }
  ];
  page = new Page();
  // MatPaginator Inputs
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private seo: SeoService,
    private renderer: Renderer2,
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
    this.getConsultants({ pageSize: 10, pageIndex: 0 });
  }
  ngAfterViewInit() {}
  getConsultants(pageInfo) {
    this.consultantService.getConsultants(pageInfo).subscribe(data => {
      // console.log(data);
      this.consultants = data.data;
      this.length = data.page.totalElements;
      this.pageIndex = data.page.pageNumber;
    });
  }
  onPaginateChange(event) {
    console.log(event);
    this.consultantService.getConsultants({ pageSize: event.pageSize, pageIndex: event.pageIndex }).subscribe(data => {
      // console.log(data);
      this.consultants = data.data;
      this.length = data.page.totalElements;
      this.pageIndex = data.page.pageNumber;
    });
  }
}
