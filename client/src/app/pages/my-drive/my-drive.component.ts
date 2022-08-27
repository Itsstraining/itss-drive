import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from 'src/app/models/file-element.model';
import { FileManagerService } from 'src/app/services/file-manager.service';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit{
  constructor(
    private fileService: FileManagerService
    ){}
  // names: string[] =[];

    // this.nbMenuService.onItemClick().
    // pipe(
    //   filter(({ tag }) => tag ==="open-rename-dialog"),
    //   map(({ item: {title} }) => title),
    // ).subscribe(title =>  this.dialogService.open(RenameFolderDialogComponent))

  // @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  // items = [
  //   { title: 'Rename' },
  //   { title: 'Mark as favorites'},
  //   { title: 'Move to Recycle Bin' },
  // ];


  // openContextMenu() {
  //   this.contextMenu.show();
  //   return false;
  // }

  // @HostListener('document:click')
  // closeContextMenu() {
  //   this.contextMenu.hide();
  // }

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
