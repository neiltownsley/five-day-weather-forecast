import {async, inject, TestBed} from '@angular/core/testing';
import {OpenWeatherMapResponseMapper} from './open.weather.map.response.mapper';
import {OpenWeatherMap, OpenWeatherMapRawHttpResponse} from './open.weather.map.item';
import {MockOpenWeatherMapHttpResponse} from '../test/mock.open.weather.map.http.response';
import {Observable} from 'rxjs/Observable';

describe('OpenWeatherMapResponseMapper', () => {

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          OpenWeatherMapResponseMapper,
        ],
      });
    }));


  const mockOpeWeatherMapResponse: OpenWeatherMapRawHttpResponse = {
    list: MockOpenWeatherMapHttpResponse.getRawOpenWeatherMapList()
  };

  it('getOpenWeatherMapResponseMap, ' +
    'should return mapped open weather map response from valid open weather map http response',
    async(inject([OpenWeatherMapResponseMapper],
      (openWeatherMapResponseMapper: OpenWeatherMapResponseMapper) => {
        const openWeatherMapResponseMap = openWeatherMapResponseMapper.getOpenWeatherMapResponseMap(
          Observable.of(mockOpeWeatherMapResponse)
        );

        openWeatherMapResponseMap.subscribe(
          (openWeatherMap: OpenWeatherMap) => {
            expect(openWeatherMap)
              .toEqual(MockOpenWeatherMapHttpResponse.getMappedOpenWeatherMapResponse());
          }
        );
      })
    ));

  it('getOpenWeatherMapResponseMap, ' +
    'should return empty open weather map response, ' +
    'when open weather map http response is invalid',
    async(inject([OpenWeatherMapResponseMapper],
      (openWeatherMapResponseMapper: OpenWeatherMapResponseMapper) => {
        const openWeatherMapResponseMap = openWeatherMapResponseMapper.getOpenWeatherMapResponseMap(
          Observable.of({})
        );

        openWeatherMapResponseMap.subscribe(
          (openWeatherMap: OpenWeatherMap) => {
            expect(openWeatherMap)
              .toEqual({openWeatherMapItemList: []});
          }
        );
      })
    ));
});
