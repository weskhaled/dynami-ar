import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Front } from './front.component';
const routes: Routes = [{
  path: '',
  component: Front,
  children: [
    {
      path: 'index',
      loadChildren: './pages/landing/landing.module#LandingModule'
    },
    {
      path: 'portfolio',
      loadChildren: './pages/portfolio/portfolio.module#PortfolioModule'
    },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
    // { path: '**', redirectTo: 'index' },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class FrontRoutingModule {
}
