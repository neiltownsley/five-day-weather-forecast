import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Title} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {WeatherIconsModule} from 'ngx-icons';

describe('AppComponent', () => {
  let title: Title;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, WeatherIconsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    title = TestBed.get(Title);
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Five day weather forecast'`, async(
    () => {
      expect(title.getTitle()).toEqual('Five day weather forecast');
    }));
});
