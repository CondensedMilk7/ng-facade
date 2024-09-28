import { InjectionToken } from '@angular/core';

export const WEATHER_COMPONENT = new InjectionToken('WeatherComponent', {
  providedIn: 'root',
  factory: () =>
    import('./weather/weather.component').then((m) => m.WeatherComponent),
});

export const NEWS_COMPONENT = new InjectionToken('NewsComponent', {
  providedIn: 'root',
  factory: () => import('./news/news.component').then((m) => m.NewsComponent),
});

export const FEED_COMPONENT = new InjectionToken('FeedComponent', {
  providedIn: 'root',
  factory: () => import('./feed/feed.component').then((m) => m.FeedComponent),
});

export const COMPONENT_TOKENS = [
  WEATHER_COMPONENT,
  NEWS_COMPONENT,
  FEED_COMPONENT,
];
