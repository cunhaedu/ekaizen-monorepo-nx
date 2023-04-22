import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NbIconLibraries, NbMenuItem, NbMenuService, NbSidebarService} from "@nebular/theme";
import {AuthService} from "@ek-frontend/auth";
import {filter, map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NbSidebarService, NbMenuService],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject<void>();

  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: { icon: "chart-line", pack: "fas" },
      link: 'general'
    },
    {
      title: 'Doctec',
      icon: { icon: "code-branch", pack: "fas" },
      expanded: true,
      children: [
        {
          title: 'Lista Mestra',
          icon: { icon: "list", pack: "fas" },
          link: 'doctec',
        }
      ]
    },
    {
      title: 'GHC',
      icon: { icon: "user-cog", pack: "fas" },
      link: 'ghc'
    },
  ];

  headerContextMenuItems: NbMenuItem[] = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private iconLibraries: NbIconLibraries,
    private authService: AuthService,
    private nbMenuService: NbMenuService
  ) {
    this.iconLibraries.registerFontPack('fas', {
      packClass: 'fas',
      iconClassPrefix: 'fa'
    });
  }

  ngOnInit(): void {
    this.startContextMenuClickListener();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  startContextMenuClickListener(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        takeUntil(this.unsubscribe),
        filter(({ tag }) => tag === 'context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if(title === 'Logout') {
          this.logout();
        }
      });
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'left');
  }

  logout() {
    this.authService.logout()
  }
}
