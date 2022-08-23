import { Component } from '@angular/core';
import { NbRouteTab } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  tabs: NbRouteTab[] = [
    {
      title: 'My drive',
      icon: 'person',
      route: './my-drive',
    },
    {
      title: 'Recently',
      icon: 'clock-outline',
      responsive: true,
      route: ['./recent'],
    },
    {
      title: 'Favorites',
      icon: 'star-outline',
      responsive: true,
      route: './favorites',
    },
    {
      title: 'Recycle bin',
      icon: 'trash-outline',
      responsive: true,
      route: './trash'
    },
  ];
}
