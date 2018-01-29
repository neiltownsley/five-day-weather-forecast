import {Injectable} from '@angular/core';
import {OpenWeatherMap, OpenWeatherMapItem, OpenWeatherMapRawHttpResponse} from './open.weather.map.item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class OpenWeatherMapResponseMapper {
  private openWeatherMapItems: OpenWeatherMapItem[] = [];

  public getOpenWeatherMapResponseMap(openWeatherMapHttpResponse: Observable<OpenWeatherMapRawHttpResponse>): Observable<OpenWeatherMap> {
    return openWeatherMapHttpResponse.map(
      (openWeatherMapResponse: OpenWeatherMapRawHttpResponse) => {
        if (!openWeatherMapResponse || !openWeatherMapResponse.list) {
          return {openWeatherMapItemList: []};
        } else {
          return this.getWeatherMapItemList(openWeatherMapResponse);
        }
      }
    );
  }

  private getWeatherMapItemList(openWeatherMapResponse: OpenWeatherMapRawHttpResponse): OpenWeatherMap {
    openWeatherMapResponse.list.forEach(
      (rawWeatherItem: number | string) => {
        if (rawWeatherItem['dt_txt'].includes('12:00')) {
          this.openWeatherMapItems.push(this.getWeatherMapItem(rawWeatherItem));
        }
      });
    return {openWeatherMapItemList: this.openWeatherMapItems};
  }

  private getWeatherMapItem(rawWeatherItem: number | string): OpenWeatherMapItem {
    return {
      dateTime: rawWeatherItem['dt_txt'],
      weatherMain: rawWeatherItem['weather'][0]['main'],
      weatherDescription: rawWeatherItem['weather'][0]['description'],
      windSpeed: rawWeatherItem['wind']['speed'],
      tempMin: rawWeatherItem['main']['temp_min'],
      tempMax: rawWeatherItem['main']['temp_max']
    };
  }
}
