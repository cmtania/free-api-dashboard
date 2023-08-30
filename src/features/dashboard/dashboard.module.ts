import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CurrencyComponent } from '../currency/currency.component';
import { WeatherComponent } from '../weather/weather.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WeatherComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    //DashboardRoutingModule
  ]
})
export class DashboardModule { }
