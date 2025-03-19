import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-component-demo';
}
