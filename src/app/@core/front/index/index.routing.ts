import { Routes, RouterModule }  from '@angular/router';

import { IndexComponent } from './index.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);