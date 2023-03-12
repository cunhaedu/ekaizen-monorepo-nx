import { Component } from '@angular/core';
import {NbIconLibraries, NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'ek-frontend-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NbSidebarService],
})
export class LayoutComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: { icon: "chart-line", pack: "fas" },
      link: '/'
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
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack('fas', {
      packClass: 'fas',
      iconClassPrefix: 'fa'
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
