import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import {routingMap} from './app.routes';
import {OpenWeatherMapRequestHandler} from './shared/open.weather.map.request.handler';
import {WeatherIconsModule} from 'ngx-icons';
import {OpenWeatherMapResponseMapper} from './shared/open.weather.map.response.mapper';
import {HttpClientModule} from '@angular/common/http';
import { WeatherItemListComponent } from './weather-dashboard/weather-item-list/weather-item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent,
    WeatherItemListComponent
  ],
  imports: [
    BrowserModule,
    routingMap,
    HttpClientModule,
    WeatherIconsModule,
  ],
  providers: [OpenWeatherMapRequestHandler, OpenWeatherMapResponseMapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
