import { Component, HostListener, ViewChild } from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbRouteTab } from '@nebular/theme';
import { CreateFolderDialogComponent } from 'src/app/components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';
import { RenameFolderDialogComponent } from 'src/app/components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';
import { FileElement } from 'src/app/models/file-element.model';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent{

  // constructor(
  //   public dialog: NbDialogService,
  //   public fileService: FileManagerService){}
  // @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  // items = [
  //   { title: 'Rename' },
  //   { title: 'Mark as favorites' },
  //   { title: 'Move to recycle bin'}
  // ];
  // openContextMenu() {
  //   this.contextMenu.show();
  //   return false;
  // }

  // @HostListener('document:click')
  // closeContextMenu() {
  //   this.contextMenu.hide();
  // }
  title = 'client';

  tabs: NbRouteTab[] = [
    {
      title: 'My drive',
      icon: 'person',
      route: '/my-drive',
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
