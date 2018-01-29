import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {WeatherDashboardComponent} from './weather-dashboard.component';
import {WeatherItemListComponent} from './weather-item-list/weather-item-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {WeatherIconsModule} from 'ngx-icons';
import {OpenWeatherMapRequestHandler} from '../shared/open.weather.map.request.handler';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OpenWeatherMapResponseMapper} from '../shared/open.weather.map.response.mapper';
import {Observable} from "rxjs/Observable";
import {MockOpenWeatherMapHttpResponse} from "../test/mock.open.weather.map.http.response";
import {OpenWeatherMap} from "../shared/open.weather.map.item";

describe('WeatherDashboardComponent', () => {
  let component: WeatherDashboardComponent;
  let fixture: ComponentFixture<WeatherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDashboardComponent, WeatherItemListComponent],
      providers: [OpenWeatherMapRequestHandler, OpenWeatherMapResponseMapper],
      imports: [RouterTestingModule, WeatherIconsModule, HttpClientModule,
        HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit, should retrieve open weather map api data,' +
    ' and make it available to child component via async input property',
    async(inject([OpenWeatherMapRequestHandler],
      (openWeatherMapRequestHandler: OpenWeatherMapRequestHandler) => {
        spyOn(openWeatherMapRequestHandler, 'getOpenWeatherMapFiveDayForecast').and.callFake(
          () => {
            return Observable.of(MockOpenWeatherMapHttpResponse.getMappedOpenWeatherMapResponse());
          });
        component.ngOnInit();
        fixture.detectChanges();

        component.openWeatherMap.subscribe(
          (openWeatherMap: OpenWeatherMap) => {
            expect(openWeatherMap).toEqual(MockOpenWeatherMapHttpResponse.getMappedOpenWeatherMapResponse());
          });
      })
    )
  );
});
