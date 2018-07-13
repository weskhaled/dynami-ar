import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the library
// import { IsotopeModule } from 'ngx-isotope';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
// standard
import { FrontRoutingModule } from './front.routing';
import { Front } from './front.component';
import { SeoService } from '../../@services/front/seo.services';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PageHeader } from './components/page-header/page-header.component';
@NgModule({
  imports: [
    CommonModule,
    // IsotopeModule,
    NgxChartsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 5,
      innerStrokeWidth: 1,
      animationDuration: 300,
      backgroundStrokeWidth: 1,
      backgroundPadding: 0,
      titleFontSize: "52",
      subtitleFontSize: "15"
    }),
    // NgCircleProgressModule.forRoot({
    //   backgroundStrokeWidth: 1,
    //   backgroundPadding: 0,
    //   radius: 100,
    //   space: 3,
    //   maxPercent: 100,
    //   unitsFontSize: 26,
    //   outerStrokeWidth: 5,
    //   innerStrokeWidth: 1,
    //   titleFontSize: 52,
    //   subtitleFontSize: 15
    // }),
    PerfectScrollbarModule,
    FrontRoutingModule
  ],
  providers: [SeoService],
  declarations: [Front, PageHeader]
})
export class FrontModule {
}
