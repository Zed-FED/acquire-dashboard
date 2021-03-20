import { Component, OnInit, ViewEncapsulation } from '@angular/core';
interface Timeframe {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  selected = '0';

  timeFrames: Timeframe[] = [
    {value: '0', viewValue: 'Monthly'},
    {value: '1', viewValue: 'Quarterly'},
    {value: '2', viewValue: 'Yearly'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
