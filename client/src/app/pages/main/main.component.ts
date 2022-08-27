import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NbContextMenuDirective, NbRouteTab } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent{

  // @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  items = [
    { title: 'Mark as favorites' },
    { title: 'Move to recycle bin'}
  ];

  // open() {
  //   this.contextMenu.show();
  //   return false;
  // }

  // @HostListener('document:click')
  // close() {
  //   this.contextMenu.hide();
  // }
  title = 'client';

  tabs: NbRouteTab[] = [
    {
      title: 'My drive',
      icon: 'person',
      route: '',
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
