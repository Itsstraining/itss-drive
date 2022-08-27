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

  constructor(
    public dialog: NbDialogService,
    public fileService: FileManagerService){}
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

  public fileElements: Observable<FileElement[]>;

  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
    const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
    this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root' });
    this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
    this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
    this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' });

    this.updateFileElementQuery();
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.getId(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    console.log(element);
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

}
