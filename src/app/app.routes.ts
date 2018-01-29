import {RouterModule, Routes} from '@angular/router';
import {WeatherDashboardComponent} from './weather-dashboard/weather-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherDashboardComponent
  }
];

export const routingMap = RouterModule.forRoot(routes);
