import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'ek-ghc-nx-welcome',
  template: `
    <div>
      <button ek-button variant="primary" [loading]="true" >Button</button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
