import {OpenWeatherMap } from '../shared/open.weather.map.item';

export class MockOpenWeatherMapHttpResponse {
  public static getRawOpenWeatherMapList(): Array<any> {
    return [
      {
        'dt': 1517227200,
        'main': {
          'temp': 11.6,
          'temp_min': 11.6,
          'temp_max': 11.6,
          'pressure': 1029.98,
          'sea_level': 1037.65,
          'grnd_level': 1029.98,
          'humidity': 80,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 7.62,
          'deg': 248.504
        },
        'rain': {
          '3h': 0.325
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-01-29 12:00:00'
      },
      {
        'dt': 1517313600,
        'main': {
          'temp': 6.22,
          'temp_min': 6.22,
          'temp_max': 6.22,
          'pressure': 1035.6,
          'sea_level': 1043.49,
          'grnd_level': 1035.6,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.02,
          'deg': 212.501
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-01-30 12:00:00'
      },
      {
        'dt': 1517400000,
        'main': {
          'temp': 6.15,
          'temp_min': 6.15,
          'temp_max': 6.15,
          'pressure': 1012.21,
          'sea_level': 1019.8,
          'grnd_level': 1012.21,
          'humidity': 97,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 7.01,
          'deg': 268.001
        },
        'rain': {
          '3h': 1.62
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-01-31 12:00:00'
      },
      {
        'dt': 1517486400,
        'main': {
          'temp': 5.02,
          'temp_min': 5.02,
          'temp_max': 5.02,
          'pressure': 1007.83,
          'sea_level': 1015.41,
          'grnd_level': 1007.83,
          'humidity': 92,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 8.16,
          'deg': 348.501
        },
        'rain': {
          '3h': 0.78
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-02-01 12:00:00'
      },
      {
        'dt': 1517572800,
        'main': {
          'temp': 5.63,
          'temp_min': 5.63,
          'temp_max': 5.63,
          'pressure': 1026.89,
          'sea_level': 1034.58,
          'grnd_level': 1026.89,
          'humidity': 79,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.96,
          'deg': 353.502
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-02-02 12:00:00'
      }
    ];
  }

  public static getMappedOpenWeatherMapResponse(): OpenWeatherMap {
    return {
      openWeatherMapItemList: [
        {
          dateTime: '2018-01-29 12:00:00',
          weatherMain: 'Rain',
          weatherDescription: 'light rain',
          windSpeed: 7.62,
          tempMin: 11.6,
          tempMax: 11.6
        },
        {
          dateTime: '2018-01-30 12:00:00',
          weatherMain: 'Clear',
          weatherDescription: 'clear sky',
          windSpeed: 2.02,
          tempMin: 6.22,
          tempMax: 6.22
        },
        {
          dateTime: '2018-01-31 12:00:00',
          weatherMain: 'Rain',
          weatherDescription: 'light rain',
          windSpeed: 7.01,
          tempMin: 6.15,
          tempMax: 6.15
        },
        {
          dateTime: '2018-02-01 12:00:00',
          weatherMain: 'Rain',
          weatherDescription: 'light rain',
          windSpeed: 8.16,
          tempMin: 5.02,
          tempMax: 5.02
        },
        {
          dateTime: '2018-02-02 12:00:00',
          weatherMain: 'Clear',
          weatherDescription: 'clear sky',
          windSpeed: 2.96,
          tempMin: 5.63,
          tempMax: 5.63
        }
      ]
    };
  }
}
