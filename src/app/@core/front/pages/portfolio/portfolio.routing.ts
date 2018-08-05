import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);