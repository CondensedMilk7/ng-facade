import { Component, Input } from '@angular/core';

export interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  template: `
    <hr />
    <p>Feed:</p>
    <ul>
      @for (post of posts; track post.title) {
        <li>
          <b>{{ post.title }}:</b> {{ post.body }}
        </li>
      }
    </ul>
  `,
})
export class FeedComponent {
  @Input() posts: Post[] = [];
}
