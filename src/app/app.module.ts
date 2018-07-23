import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// plugins
import { MaterialModule } from './@core/material.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// routing module
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService, UserService } from './@services/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards/auth-guard.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    // UserService,
    UserService,
    MaterialModule,
    {
     provide: PERFECT_SCROLLBAR_CONFIG,
     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
