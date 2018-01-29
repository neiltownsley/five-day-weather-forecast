export interface OpenWeatherMap {
  openWeatherMapItemList?: OpenWeatherMapItem[];

}
export interface OpenWeatherMapItem {
  dateTime?: string;
  weatherMain?: string;
  weatherDescription?: string;
  tempMin?: number;
  tempMax?: number;
  windSpeed?: number;
}


export interface OpenWeatherMapRawHttpResponse {
  list?: Array<any>;
}
