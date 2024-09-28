import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  template: `
    <hr />
    <p>Weather:</p>
    <p>Temperature: {{ temperature }}</p>
    <p>Humidity: {{ humidity }}</p>
  `,
})
export class WeatherComponent {
  @Input() temperature = 0;
  @Input() humidity = 0;
}
