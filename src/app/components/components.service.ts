import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { COMPONENT_TOKENS } from './component-tokens';
import { ComponentsResponse, FacadeComponent } from './component-response';

@Injectable({ providedIn: 'root' })
export class ComponentsService {
  private readonly http = inject(HttpClient);
  private tokens = COMPONENT_TOKENS;

  getComponents(): Observable<FacadeComponent[]> {
    return this.http
      .get<{ components: ComponentsResponse }>('/components.json')
      .pipe(
        map((response) =>
          response.components
            .map((comp) => ({
              token: this.tokens.find(
                (token) => token.toString().split(' ')[1] === comp.id,
              ),
              data: comp.componentData,
            }))
            .filter((comp) => comp.token),
        ),
        tap(console.log),
      );
  }
}
