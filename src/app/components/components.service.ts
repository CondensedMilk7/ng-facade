import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ComponentsResponse } from './component-response';
import { map, tap } from 'rxjs';
import { COMPONENT_TOKENS } from './component-tokens';

@Injectable({ providedIn: 'root' })
export class ComponentsService {
  private readonly http = inject(HttpClient);
  private tokens = COMPONENT_TOKENS;

  getComponents() {
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
