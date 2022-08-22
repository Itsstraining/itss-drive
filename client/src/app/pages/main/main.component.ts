import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NbContextMenuDirective } from '@nebular/theme';

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
}
