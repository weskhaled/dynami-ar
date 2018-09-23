import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './login.routing';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../../_shared/shared.module';

@NgModule({
  imports: [
    PerfectScrollbarModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
