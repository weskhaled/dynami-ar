import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// plugin
// standard
import { FrontRoutingModule } from './front.routing';
import { Front } from './front.component';
import { SeoService } from '../../@services/front/seo.services';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PageHeader } from './components/page-header/page-header.component';
@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FrontRoutingModule
  ],
  providers: [SeoService],
  declarations: [Front, PageHeader]
})
export class FrontModule {
}
