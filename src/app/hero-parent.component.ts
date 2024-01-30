import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  
  // HeroParentComponent anida el HeroChildComponent "app-hero-child" secundario dentro de un repetidor *ngFor, 
  //vinculando su propiedad de cadena master al alias master del child y la instancia de heroe de cada iteración a la propiedad de heroe child.  
  //heroes y master es la propiedad de HeroParentComponent. Para acceder y pasar un heroe se usa ngFor a heroes, 
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>

    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [masteralias]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
