import { Routes, RouterModule }  from '@angular/router';

import { CompanyComponent } from './company.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);