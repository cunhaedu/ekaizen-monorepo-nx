import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'pdi',
    loadChildren: () => import('pdi/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'ghc',
    loadChildren: () => import('ghc/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'doctec',
    loadChildren: () =>
      import('doctec/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
