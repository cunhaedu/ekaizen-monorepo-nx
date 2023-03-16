import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LayoutComponent } from './shared/layout/layout.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService,
} from '@nebular/theme';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LayoutComponent,
    IndexComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
  providers: [NbThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
