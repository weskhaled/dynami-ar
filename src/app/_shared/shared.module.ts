import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
 
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ LoadingComponent ],
 exports:      [ LoadingComponent,
                 CommonModule ]
})
export class SharedModule { }