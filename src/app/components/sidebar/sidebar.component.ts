import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mainNav: any[] = [
    {
      menuItem: 'Dashboard',
      link: '/',
      icon: 'dashboard'
    },
    {
      menuItem: 'Selling List',
      link: '/selling',
      icon: 'selling'
    },
    {
      menuItem: 'Comparison',
      link: '/comparison',
      icon: 'comparison'
    },
    {
      menuItem: 'Product',
      link: '/product',
      icon: 'product'
    },
    {
      menuItem: 'Chart',
      link: '/chart',
      icon: 'chart'
    },
    {
      menuItem: 'Balance',
      link: '/balance',
      icon: 'balance'
    },
    {
      menuItem: 'Settings',
      link: '/setting',
      icon: 'setting'
    },
    {
      menuItem: 'Help Center',
      link: '/help',
      icon: 'help'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
