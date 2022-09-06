import { Injectable } from '@angular/core';

import { v4 } from 'uuid';
import { FileElement } from '../models/file-element.model';
import { Observable, BehaviorSubject } from 'rxjs';

export interface IFileService {
  get?(id: string): FileElement;
  add?(fileElement?: FileElement): any;
  delete?(id?: string): any;
  update?(id?: string, update?: Partial<FileElement>): any;
  queryInFolder?(folderId?: string): Observable<FileElement[]>;
}



@Injectable()

export class FileManagerService implements IFileService{
<<<<<<< HEAD
  dataLength = 0;
  private map = new Map<string, FileElement>();
  
  getData(){
    this.querySubject.subscribe(res => {
      this.dataLength = res.length;
    })
  }
=======
  private map = new Map<string, FileElement>();
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  add(fileElement: FileElement) {
    fileElement.id = v4();
    this.map.set(fileElement.id, this.clone(fileElement));
    return fileElement;
  }

  delete(id: string) {
    this.map.delete(id);
  }

  update(id: string, update: Partial<FileElement>) {
    let element:any= this.map.get(id);
    element = Object.assign(element, update);
    this.map.set(element.id, element);
  }

<<<<<<< HEAD
  public querySubject: BehaviorSubject<FileElement[]>;
=======
  private querySubject: BehaviorSubject<FileElement[]>;
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  queryInFolder(folderId: string) {
    const result: FileElement[] = [];
    this.map.forEach(element => {
      if (element.parent === folderId) {
        result.push(this.clone(element));
      }
    });
    if (!this.querySubject) {
      this.querySubject = new BehaviorSubject(result);
    } else {
      this.querySubject.next(result);
    }
    return this.querySubject.asObservable();
  }

  getId(id:string){
    return this.map.get(id)
  }
  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element));
  }
}
