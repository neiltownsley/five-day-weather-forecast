import {Injectable} from '@angular/core';
import {OpenWeatherMapResponseMapper} from './open.weather.map.response.mapper';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {OpenWeatherMapRawHttpResponse} from './open.weather.map.item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class OpenWeatherMapRequestHandler {

  private readonly openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/forecast?' +
    'q=London,uk&units=metric&APPID=f5f12545e45bb85ad0c71cc2df90c1dd';

  constructor(private httpClient: HttpClient,
              private openWeatherMapResponseMapper: OpenWeatherMapResponseMapper) {
  }

  public getOpenWeatherMapFiveDayForecast(): any {
    const openWeatherMapResponse: Observable<OpenWeatherMapRawHttpResponse> = this.httpClient.get(this.openWeatherMapUrl)
      .catch(
        (err: HttpErrorResponse) => {
          console.error('An error occurred:', err.error);
          return Observable.of({});
        });

    return this.openWeatherMapResponseMapper
      .getOpenWeatherMapResponseMap(openWeatherMapResponse);
  }

}
