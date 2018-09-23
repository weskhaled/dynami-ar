import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './_guards/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: './@core/auth/auth.module#AuthModule' },
  { path: '', loadChildren: './@core/front/front.module#FrontModule' },
  { 
    path: 'admin',
    loadChildren: './@core/back/back.module#BackModule',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
