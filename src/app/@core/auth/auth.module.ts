import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// plugin
// standard
import { AuthRoutingModule } from './auth.routing';
import { Auth } from './auth.component';
import { SeoService } from '../../@services/front/seo.services';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    AuthRoutingModule
  ],
  providers: [SeoService],
  declarations: [Auth]
})
export class AuthModule {
}
