import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the library
// import { IsotopeModule } from 'ngx-isotope';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AgmCoreModule } from '@agm/core';
// standard
import { FrontRoutingModule } from './front.routing';
import { Front } from './front.component';
import { SeoService } from '../../@services/front/seo.services';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PageHeader } from './components/page-header/page-header.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  imports: [
    CommonModule,
    // IsotopeModule,
    NgxChartsModule,
    SwiperModule,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxHnmsDWT8h1fX6uaVQ5tCqFIudenhTiI'
    }),
    ScrollToModule.forRoot(),
    PerfectScrollbarModule,
    FrontRoutingModule
  ],
  providers: [
    SeoService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [Front]
})
export class FrontModule {
}
