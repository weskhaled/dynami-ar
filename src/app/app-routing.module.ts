import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

const routes: Routes = [
  { path: 'auth', loadChildren: './@core/auth/auth.module#AuthModule' },
  { path: '', loadChildren: './@core/front/front.module#FrontModule' },
  { path: '**', redirectTo: 'index' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
    

