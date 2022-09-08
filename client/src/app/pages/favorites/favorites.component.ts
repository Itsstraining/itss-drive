import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from 'src/app/models/file-element.model';
import { FileMetaData } from 'src/app/models/file-metadata.model';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    constructor(
      private fileService: FileManagerService,
      private firestoreService: FirestoreService,
      ){}
    public fileElements: Observable<FileElement[]>;
  
    listOfElements : FileElement[] = [];
  
    currentRoot: FileElement;
    currentPath: string;
    canNavigateUp = false;
    count:number;
    ngOnInit() {
      // this.getAllFolders();
      // this.updateFileElementQuery();
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
  
    getAllFolders() {
      this.firestoreService.getAllFolders().subscribe( res => {
          this.listOfElements = res.map((e : any) => {
              const data = e.payload.doc.data();
              data.id = e.payload.doc.id;
              // console.log(data);
              
              return this.fileService.add(data);
          });
      }, err => {
          console.log('Error occured while fetching file meta data');
      })
  
    }
  
    deleteFolder(folder : FileElement) {
  
      if(window.confirm('Are you sure you want to delete '+ folder.name   + '?')) {
        this.firestoreService.deleteFolders(folder);
        this.ngOnInit();
     }
    }
  
    getAllFiles() {
      this.firestoreService.getAllFiles().subscribe( res => {
          this.listOfElements = res.map((e : any) => {
              const data = e.payload.doc.data();
              data.id = e.payload.doc.id;
              // console.log(data);
              return this.fileService.add(data);
          });
      }, err => {
          console.log('Error occured while fetching file meta data');
      })
    }
  
    deleteFile(file : FileMetaData) {
  
      if(window.confirm('Are you sure you want to delete '+ file.name   + '?')) {
        this.firestoreService.deleteFile(file);
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
  

