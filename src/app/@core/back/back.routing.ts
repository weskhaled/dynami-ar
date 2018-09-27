import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Back } from './back.component';

import { AuthGuard } from '../../_guards/auth-guard.service';
const routes: Routes = [{
  path: '',
  component: Back,
  children: [
    {
      path: '',
      loadChildren: './pages/index/index.module#DashModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'consultants',
      loadChildren: './pages/consultant/consultant.module#ConsultModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'companies',
      loadChildren: './pages/company/company.module#CompanyModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'client',
      loadChildren: './pages/client/client.module#ClientModule',
      canActivate: [AuthGuard]
    },
    { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },
    // { path: '**', redirectTo: 'index' },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BackRoutingModule {
}
