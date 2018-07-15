import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './index.routing';
import { IndexComponent } from './index.component';
import { MaterialModule } from '../../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { IsotopeModule } from 'ngx-isotope';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SwiperSlider } from '../../components/swiper-slider/swiper-slider.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IsotopeModule,
    PerfectScrollbarModule,   
    SwiperModule, 
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
    AgmCoreModule,
    ScrollToModule.forRoot(),
    NgxChartsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [IndexComponent,SwiperSlider],
  providers: []
})
export class IndexModule {}
