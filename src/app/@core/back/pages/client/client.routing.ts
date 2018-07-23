import { Routes, RouterModule }  from '@angular/router';

import { ClientComponent } from './client.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);