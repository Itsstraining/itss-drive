import { Injectable } from '@angular/core';
import { doc, getDocFromCache } from "firebase/firestore";
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
  k: number;

  getStatistics(): void{
    const visitArray = this.fireStore.collection("Upload").snapshotChanges();

    //console.log([this.afs.collectionGroup("visits")].length);
    this.k = 0;
    for (let val of visitArray.toString()){
        this.k += 1;
    }
    console.log(this.k);
}            

  saveMetaDateOfFolder(element: FileElement)      {
    const folderMeta = {
      id: '',
      name: element.name,
      isFolder: true,
      parent:'root',
      isStarred: false,
      createAt:'',
    }
    folderMeta.id = this.fireStore.createId();
    this.fireStore.collection('/element').add(folderMeta)
  }      

  getAllFolders() {
    return this.fireStore.collection('/element').snapshotChanges();
  }

  deleteFolders(folderMeta : FileElement) {

    this.fireStore.collection('/element').doc(folderMeta.id).delete();
    this.fireStorage.ref('/Folder'+ folderMeta.name).delete();

  }

  saveMetaDataOfFile(fileObj : FileMetaData) {

    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size,
      isFolder: false,
      parent:'root',
      isStarred: false,
      createAt:'',
    }

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/element').add(fileMeta);
    
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/element').snapshotChanges();
  }

  // delete file 
  deleteFile(fileMeta : FileMetaData) {

    this.fireStore.collection('/element').doc(fileMeta.id).delete();
    this.fireStorage.ref('/element/'+ fileMeta.name).delete();

  }
}
  

