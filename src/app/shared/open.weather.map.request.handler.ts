import {Injectable} from '@angular/core';
import {OpenWeatherMapResponseMapper} from './open.weather.map.response.mapper';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {OpenWeatherMapRawHttpResponseInterface} from './open.weather.map.raw.http.response.interface';
import {OpenWeatherMapInterface} from './open.weather.map.interface';

@Injectable()
export class OpenWeatherMapRequestHandler {

  private readonly openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/forecast?' +
'q=London,uk&units=metric&APPID=f5f12545e45bb85ad0c71cc2df90c1dd';

  constructor(private httpClient: HttpClient,
              private openWeatherMapResponseMapper: OpenWeatherMapResponseMapper) {
  }

  public getOpenWeatherMapFiveDayForecast(): Observable<OpenWeatherMapInterface> {
    const openWeatherMapResponse: Observable<OpenWeatherMapRawHttpResponseInterface> = this.httpClient.get(this.openWeatherMapUrl)
      .catch(
        (err: HttpErrorResponse) => {
          console.error('An error occurred:', err.error);
          return Observable.of({});
        });

    return this.openWeatherMapResponseMapper
      .getOpenWeatherMapResponseMap(openWeatherMapResponse);
  }

}
