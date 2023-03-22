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
  NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService, NbUserModule,
} from '@nebular/theme';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NbThemeModule.forRoot({name: 'ekaizen'}),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbInputModule,
    ReactiveFormsModule,
    NbUserModule,
  ],
  providers: [NbThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
