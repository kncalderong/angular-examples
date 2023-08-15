import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2 style="margin-top: 5rem;">Master controls {{ names.length }} names</h2>

    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
    <div *ngFor="let name of names">{{ name }}</div>
  `,
})
export class NameParentComponent {
  // Displays 'Dr. IQ', '<no name set>', 'Bombasto'
  names = ['Dr. IQ', '   ', '  Bombasto  '];
}
