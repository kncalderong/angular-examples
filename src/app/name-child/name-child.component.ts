import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3> ',
})
export class NameChildComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || 'no name set>';
    console.log('name: ', name);

    if (name === '  Bombasto  ') {
      this._name = 'modified';
    }
  }
  private _name = '';
}
