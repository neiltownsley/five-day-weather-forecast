import {Component, OnInit} from '@angular/core';
import {OpenWeatherMapRequestHandler} from '../shared/open.weather.map.request.handler';
import {Observable} from 'rxjs/Observable';
import {OpenWeatherMapInterface} from '../shared/open.weather.map.interface';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html'
})
export class WeatherDashboardComponent implements OnInit {
  public openWeatherMap: Observable<OpenWeatherMapInterface>;

  constructor(private openWeatherMapRequestHandler: OpenWeatherMapRequestHandler) {
  }


  ngOnInit() {
    this.openWeatherMap = this.openWeatherMapRequestHandler.getOpenWeatherMapFiveDayForecast();
  }
}
