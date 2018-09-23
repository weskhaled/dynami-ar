import { Routes, RouterModule }  from '@angular/router';

import { ConsultantComponent } from './consultant.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ConsultantComponent,
    children: [
        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);