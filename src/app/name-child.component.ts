import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  //Use an input property setter to intercept and act upon a value from the parent.
  //Use un seteador de propiedad de entrada para interceptar y actuar sobre un valore desde el padre
  @Input()
  get name(): string { return this._name; }
  // The setter of the name input property in the child NameChildComponent trims the whitespace from a name and replaces an empty value with default text.
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
}
