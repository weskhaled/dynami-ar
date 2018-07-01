import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './login.routing';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    PerfectScrollbarModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
