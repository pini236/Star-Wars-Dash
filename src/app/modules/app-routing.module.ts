import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from '../components/chart/chart.component';
import { TableComponent } from '../components/table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent},
  { path: 'chart', component: ChartComponent},
  { path: '', redirectTo: '/table', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
