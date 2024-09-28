import { InjectionToken } from '@angular/core';
import { Post } from './feed/feed.component';

export interface ComponentResponse<ComponentId, ComponentData extends object> {
  id: ComponentId;
  componentData: ComponentData;
}

export type WeatherComponentResponse = ComponentResponse<
  'WeatherComponent',
  { temperature: number; humidity: number }
>;

export type NewsComponentResponse = ComponentResponse<
  'NewsComponent',
  { mostRecent: string }
>;

export type FeedComponentResponse = ComponentResponse<
  'FeedComponent',
  { posts: Post[] }
>;

export type ComponentsResponse = [
  WeatherComponentResponse,
  NewsComponentResponse,
  FeedComponentResponse,
];
