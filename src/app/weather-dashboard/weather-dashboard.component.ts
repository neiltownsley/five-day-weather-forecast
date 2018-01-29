import {Component, OnInit} from '@angular/core';
import {OpenWeatherMapRequestHandler} from '../shared/open.weather.map.request.handler';
import {OpenWeatherMap} from '../shared/open.weather.map.item';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {
  public openWeatherMap: Observable<OpenWeatherMap>;

  constructor(private openWeatherMapRequestHandler: OpenWeatherMapRequestHandler) {
  }


  ngOnInit() {
    this.openWeatherMap = this.openWeatherMapRequestHandler.getOpenWeatherMapFiveDayForecast();
  }
}
