import {
  Component,
  inject,
  Injector,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ComponentsService } from './components/components.service';
import { FacadeComponent } from './components/component-response';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly vcr = inject(ViewContainerRef);
  private readonly injector = inject(Injector);
  private readonly componentsService = inject(ComponentsService);

  ngOnInit(): void {
    this.componentsService
      .getComponents()
      .subscribe((components) => this.renderComponents(components));
  }

  renderComponents(components: FacadeComponent[]) {
    components.forEach(({ token, data }) => {
      this.injector.get(token)?.then((componentClass: any) => {
        const component = this.vcr.createComponent(componentClass);

        Object.entries(data).forEach(([key, value]) => {
          component.setInput(key, value);
        });
      });
    });
  }
}
