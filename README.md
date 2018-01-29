# Five Day Weather Forecast

[Click here to run the application](https://neiltownsley.github.io/five-day-weather-forecast/)

## Application Information

The application utilises Open Weather Map API to retrieve a five day weather forecast summary.

The daily summary is based on the retrieved OWM properties for the given day at 12:00 pm.

The raw data is mapped to an application specific Model which is used to display the dashboard data.

## Problems
 * Retrieving the data and mapping the required values

## Solutions
 * After retrieving the raw OWM data via a http get request the data is mapped to a model via a service which is called after executing the http request. (see: open.weather.map.response.mapper.ts)

## Improvements
 * Currently the dashboard on displays a daily summary based on the OWM data for the given day at 12:00pm, it would be nice to expand this to a morning, afternoon and evening summary.

## Instructions

Run `git clone https://github.com/neiltownsley/five-day-weather-forecast.git` to clone 

Run `npm i` to install the dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
