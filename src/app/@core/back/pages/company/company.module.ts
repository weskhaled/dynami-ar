import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './company.routing';
import { CompanyComponent } from './company.component';
import { MaterialModule } from '../../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UserCard } from './components/card/card.component';
import { CompanyService } from '../../../../@services/admin/company.service';
import { AddCompanyDialog } from './components/dialog/dialog-add-company/dialog-add-company.component';
import { ConfirmDialog } from './components/dialog/dialog-confirm/dialog-confirm.component';
import { SharedModule } from '../../../../_shared/shared.module';

@NgModule({
  imports: [
    PerfectScrollbarModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    routing,
    SharedModule
  ],
  declarations: [CompanyComponent, UserCard,AddCompanyDialog,ConfirmDialog],
  entryComponents: [
    AddCompanyDialog,
    ConfirmDialog
  ],
  providers: [CompanyService]
})
export class CompanyModule {}
