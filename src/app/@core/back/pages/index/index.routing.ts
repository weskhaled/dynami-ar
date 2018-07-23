import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './index.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);