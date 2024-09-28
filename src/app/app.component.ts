import {
  Component,
  inject,
  InjectionToken,
  Injector,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsService } from './components/components.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly vcr = inject(ViewContainerRef);
  private readonly injector = inject(Injector);
  private readonly componentsService = inject(ComponentsService);

  ngOnInit(): void {
    this.componentsService.getComponents().subscribe((components) => {
      components.forEach((comp: { token: InjectionToken<Promise<any>>, data: object}) => {
        this.injector.get(comp.token)?.then((componentClass: any) => {
          const component = this.vcr.createComponent(componentClass);

          Object.entries(comp.data).forEach(([key, value]) => {
            component.setInput(key, value);
          });
        });
      });
    });
  }
}
