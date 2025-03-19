import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.css',
  template: `
    <p>This is a dynamic loaded component! </p>`
})
export class DynamicContentComponent {

}
