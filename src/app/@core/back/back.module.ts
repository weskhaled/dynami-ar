import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// plugin
// standard
import { BackRoutingModule } from './back.routing';
import { Back } from './back.component';
import { PageSidebar } from './components/page-sidebar/page-sidebar.component';
import { PageHeader } from './components/page-header/page-header.component';
import { PageFooter } from './components/page-footer/page-footer.component';
import { OverlaySearch } from './components/overlay-search/overlay-search.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SeoService } from '../../@services/front/seo.services';
import { UserService } from '../../@services/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../_helpers/jwt.interceptor';
@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    HttpClientModule,
    BackRoutingModule
  ],
  providers: [
    SeoService,
    // UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }
  ],
  declarations: [Back, PageSidebar, PageHeader, PageFooter, OverlaySearch]
})
export class BackModule {
}
