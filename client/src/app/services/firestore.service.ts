import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetaData } from '../models/file-metadata.model';
import { FileElement } from '../models/file-element.model';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fireStore : AngularFirestore, 
              private fireStorage : AngularFireStorage,
              ) { }

  saveMetaDateOfFolder(folderObj: FileElement)      {
    const folderMeta = {
      id: '',
      name: folderObj.name,
      isFolder: true,
      parent:'',
      isStarred: false,
      createAt:'',
    }
    folderMeta.id = this.fireStore.createId();
    this.fireStore.collection('/Folder').add(folderMeta)
  }      

  getAllFolders() {
    return this.fireStore.collection('/Folder').snapshotChanges();
  }

  deleteFolders(folderMeta : FileElement) {

    this.fireStore.collection('/Folder').doc(folderMeta.id).delete();
    this.fireStorage.ref('/Folder'+ folderMeta.name).delete();

  }

  saveMetaDataOfFile(fileObj : FileMetaData) {

    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size
    }

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/Upload').add(fileMeta);
    
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/Upload').snapshotChanges();
  }

  // delete file 
  deleteFile(fileMeta : FileMetaData) {

    this.fireStore.collection('/Upload').doc(fileMeta.id).delete();
    this.fireStorage.ref('/Uploads/'+ fileMeta.name).delete();

  }


}
