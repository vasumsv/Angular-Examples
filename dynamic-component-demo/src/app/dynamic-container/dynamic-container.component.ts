import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-container',
  standalone: true,
  imports: [CommonModule, DynamicContentComponent], // Import dependencies
  template: `
    <button (click)="loadComponent()">Load Component</button>
    <button (click)="clearComponent()">Clear Component</button>
    <ng-container #dynamicContainer></ng-container>
  `,
})
export class DynamicContainerComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) 
  container!: ViewContainerRef;

  loadComponent() {
    this.container.clear();
    this.container.createComponent(DynamicContentComponent);
  }

  clearComponent() {
    this.container.clear();
  }
}
