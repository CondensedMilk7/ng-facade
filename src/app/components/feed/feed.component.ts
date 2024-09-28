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
    <p>feed</p>
    @for (post of posts; track post.title) {
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    }
  `,
})
export class FeedComponent {
  @Input() posts: Post[] = [];
}
