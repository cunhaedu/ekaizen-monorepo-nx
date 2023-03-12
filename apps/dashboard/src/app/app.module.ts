import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LayoutComponent } from './shared/layout/layout.component';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule, NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService
} from "@nebular/theme";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbCardModule,
  ],
  providers: [NbThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
