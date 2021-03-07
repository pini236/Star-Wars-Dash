import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../../app/components/dashboard/dashboard.component';
import { HeaderComponent } from '../components/layout/header/header.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { TableComponent } from '../components/table/table.component';
import { ChartComponent } from '../components/chart/chart.component';
import { MaterialModule } from './material.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from '../components/layout/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    ChartComponent,
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
