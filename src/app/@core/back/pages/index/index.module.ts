import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './index.routing';
import { DashboardComponent } from './index.component';
import { MaterialModule } from '../../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    PerfectScrollbarModule,
    MaterialModule,
    CommonModule,
    routing
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashModule {}
