import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  template: `
    <hr />
    <p>News: {{ mostRecent }}</p>
  `,
})
export class NewsComponent {
  @Input() mostRecent = 'Nothing!';
}
