import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }        from './consultant.routing';
import { ConsultantComponent } from './consultant.component';
import { MaterialModule } from '../../../../@core/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UserCard } from './components/card/card.component';
import { ConsultantService } from '../../../../@services/admin/consultant.service';
import { AddConsultantDialog } from './components/dialog/dialog-add-consultant/dialog-add-consultant.component';
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
  declarations: [ConsultantComponent, UserCard,AddConsultantDialog,ConfirmDialog],
  entryComponents: [
    AddConsultantDialog,
    ConfirmDialog
  ],
  providers: [ConsultantService]
})
export class ConsultModule {}
