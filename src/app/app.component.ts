import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-life-simulator';
  pageTitleList = [
    {url: '/home', ntitle: 'Home'},
    {url: '/character', title: 'Character'},
    {url: '/settings', title: 'Settings'}
  ];
  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const foundPageTitle = _.find(this.pageTitleList, {url: event.url});
        if (foundPageTitle) {
          this.title = foundPageTitle.title;
        } else {
          this.title = 'Home';
        }
      }
    });
}
}
