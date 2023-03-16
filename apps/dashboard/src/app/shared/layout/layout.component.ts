import {Component, ViewEncapsulation} from '@angular/core';
import {NbIconLibraries, NbMenuItem, NbSidebarService} from "@nebular/theme";
import {AuthService} from "@ek-frontend/auth";

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NbSidebarService],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: { icon: "chart-line", pack: "fas" },
      link: 'general'
    },
    {
      title: 'Doctec',
      icon: { icon: "code-branch", pack: "fas" },
      link: 'doctec'
    },
    {
      title: 'GHC',
      icon: { icon: "user-cog", pack: "fas" },
      link: 'ghc'
    },
    {
      title: 'PDI',
      icon: { icon: "clipboard", pack: "fas" },
      link: 'pdi'
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private iconLibraries: NbIconLibraries,
    private authService: AuthService,
  ) {
    this.iconLibraries.registerFontPack('fas', {
      packClass: 'fas',
      iconClassPrefix: 'fa'
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  logout() {
    this.authService.logout()
  }
}
