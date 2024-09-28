import { InjectionToken } from '@angular/core';

export interface ComponentResponse<ComponentId, ComponentData extends object> {
  id: ComponentId;
  componentData: ComponentData;
}

export type ComponentsResponse = ComponentResponse<string, object>[];

export type Constructor<T = any> = new (...args: any[]) => T;
export type ComponentClass<T = any> = InstanceType<Constructor<T>>;

export interface FacadeComponent {
  token: InjectionToken<Promise<ComponentClass>>;
  data: object;
}
