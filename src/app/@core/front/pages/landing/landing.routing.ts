import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { LandingComponent } from './landing.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);