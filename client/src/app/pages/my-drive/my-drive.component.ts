import { Component, NgZone, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from 'src/app/models/file-element.model';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetaData } from 'src/app/models/file-metadata.model';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit{
  constructor(
    private fileService: FileManagerService,
    private firestoreService: FirestoreService,
    private fireService: AngularFirestore,
    private zone: NgZone,
    ){}
  public fileElements: Observable<FileElement[]>;
  listOfElements : FileElement[] = [];

  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
    
      console.log(this.fileService.dataLength)
      this.zone.runOutsideAngular(() => {
        this.getAllElements()
        // this.updateFileElementQuery();},
      });
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement | FileMetaData) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement | FileMetaData) {
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

  renameElement(element: FileElement | FileMetaData) {
    console.log(element);
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
      this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  getAllElements() {
    this.firestoreService.getAllElements().subscribe( res => {
      this.fileService.map.clear()
        this.listOfElements = res.map((e : any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            // console.log(data);
            return this.fileService.add(data);
        });
    }, err => {
        console.log('Error occured while fetching file meta data');
    })
    this.updateFileElementQuery();
  }

  deleteElement(element : FileElement | FileMetaData) {

    if(window.confirm('Are you sure you want to delete '+ element.name   + '?')) {
      this.firestoreService.deleteElement(element);
      this.ngOnInit();
   }
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
