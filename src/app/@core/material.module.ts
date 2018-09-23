import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatPaginatorModule,

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}