import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
const matModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules
  ],
  exports: [
    matModules
  ]
})
export class MaterialModule { }
