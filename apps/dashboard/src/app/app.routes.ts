import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from '@ek-frontend/auth';

export const appRoutes: Route[] = [
  {
    path: 'ghc',
    loadChildren: () => import('ghc/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'general',
        component: NxWelcomeComponent,
      },
      {
        path: 'ghc',
        loadChildren: () =>
          import('ghc/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'doctec',
        loadChildren: () =>
          import('doctec/Module').then((m) => m.RemoteEntryModule),
      },
    ],
  },
];
