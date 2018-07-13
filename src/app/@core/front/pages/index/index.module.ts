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

@NgModule({
  imports: [
    IsotopeModule,
    PerfectScrollbarModule,    
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
    NgxChartsModule,
    MaterialModule,
    CommonModule,
    routing
  ],
  declarations: [IndexComponent],
  providers: []
})
export class IndexModule {}
