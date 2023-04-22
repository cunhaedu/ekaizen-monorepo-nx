import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doctec-nx-welcome',
  template: `
    <div>
      <button ek-button variant="secondary">Button</button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
