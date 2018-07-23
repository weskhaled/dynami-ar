import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Auth } from './auth.component';
const routes: Routes = [{
  path: '',
  component: Auth,
  children: [
    {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: '**', redirectTo: 'index' },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
