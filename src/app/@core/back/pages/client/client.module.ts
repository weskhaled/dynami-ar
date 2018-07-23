import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { routing }        from './client.routing';
import { ClientComponent } from './client.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditClientDialog } from '../components/dialog/dialog-edit-client/dialog-edit-client.component';
import { ConfirmDialog } from '../components/dialog/dialog-confirm/dialog-confirm.component';
import { AddClientDialog } from '../components/dialog/dialog-add-client/dialog-add-client.component';
import { MaterialModule } from '../../../material.module';
import { ClientService } from '../../../../@services/admin/client.service';
import { MockServerResultsService } from '../../../../@services/admin/mock-server-results-service';

@NgModule({
  imports: [
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    NgxDatatableModule,
    routing
  ],
  declarations: [ClientComponent,AddClientDialog,EditClientDialog,ConfirmDialog],
  entryComponents: [
    AddClientDialog,
    EditClientDialog,
    ConfirmDialog
  ],
  providers: [ClientService,MockServerResultsService]
})
export class ClientModule {}
