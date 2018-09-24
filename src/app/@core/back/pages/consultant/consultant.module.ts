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

@NgModule({
  imports: [
    PerfectScrollbarModule,
    MaterialModule,
    CommonModule,
    routing
  ],
  declarations: [ConsultantComponent, UserCard,AddConsultantDialog],
  entryComponents: [
    AddConsultantDialog
  ],
  providers: [ConsultantService]
})
export class ConsultModule {}
