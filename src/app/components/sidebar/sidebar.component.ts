import { Component, OnInit } from '@angular/core';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'databinding', title: 'Data Binding',  icon: 'library_books', class: '' },
    { path: 'structuraldirectives', title: 'Structural Directives',  icon: 'bubble_chart', class: '' },
    { path: 'attributedirectives', title: 'Attribute Directives',  icon: 'build', class: '' },
    { path: 'pipes', title: 'Pipes',  icon: 'play_for_work', class: '' },
    { path: 'forms', title: 'Forms',  icon: 'play_for_work', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}