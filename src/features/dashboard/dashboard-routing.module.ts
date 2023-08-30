import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from '../currency/currency.component';
import { WeatherComponent } from '../weather/weather.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  // { path: '', component: WeatherComponent},
  // { path: '', component: CurrencyComponent,
      //children:[
       // {path: '', redirectTo: 'currency', pathMatch: 'full'},
        // {path: 'regular', component: Children1},
        // {path: 'loyal', component: Children2},
      //]
    //},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
