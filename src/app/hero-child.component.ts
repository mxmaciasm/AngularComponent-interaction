import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',

  //Pass data from parent to child with input binding
  
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  //https://angular.io/guide/inputs-outputs#input

  @Input() hero!: Hero;
  @Input('masteralias') masterName = ''; //tiene un alias 'masteralias'
}
