import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})

export class MaterialModule {}
