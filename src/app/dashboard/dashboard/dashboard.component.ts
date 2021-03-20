import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards: object[];


  constructor() {
    // this.cards = [
    //   {
    //     icon: 'activity',
    //     title: 'Capacity',
    //     heading: '150 GB',
    //     noteIcon: 'refresh-cw',
    //     noteText: 'Update Now',
    //     bgClass: 'gradient-1'
    //   },
    //   {
    //     icon: 'database',
    //     title: 'Revenue',
    //     heading: '$ 1,345',
    //     noteIcon: 'calendar',
    //     noteText: 'Last Day',
    //     bgClass: 'gradient-2'
    //   },
    //   {
    //     icon: 'heart',
    //     title: 'Errors',
    //     heading: '23',
    //     noteIcon: 'clock',
    //     noteText: 'Last Hour',
    //     bgClass: 'gradient-3'
    //   },
    //   {
    //     icon: 'star',
    //     title: 'Followers',
    //     heading: '+45K',
    //     noteIcon: 'refresh-cw',
    //     noteText: 'Update Now',
    //     bgClass: 'gradient-4'
    //   }
    // ]
  }

  ngOnInit(): void {

  }

}
