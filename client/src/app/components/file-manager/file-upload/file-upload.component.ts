import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { FileMetaData } from 'src/app/models/file-metadata.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FileSizePipe } from 'src/app/pipes/file-size.pipe';
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    FileSizePipe
  ]
})
export class FileUploadComponent implements OnInit {
  selectedFiles !: FileList;
  currentFileUpload !: FileMetaData;
  percentage: number = 0;

  listOfFiles : FileMetaData[] = [];
  private index: number = 0;
  @HostBinding('class')
  classes = 'example-items-rows';

  physicalPositions = NbGlobalPhysicalPosition;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private fireStoreService: FirestoreService,
              private fireStorage: AngularFireStorage,
              private toastrService: NbToastrService,
              ) { }

  ngOnInit(): void {
    this.getStarredElement();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
     this.currentFileUpload =  new FileMetaData(this.selectedFiles[0]);
     const path = 'element/'+ this.currentFileUpload.file.name;

     const storageRef = this.fireStorage.ref(path);
     const uploadTask = storageRef.put(this.selectedFiles[0]);

     uploadTask.snapshotChanges().pipe(finalize( () => {
        storageRef.getDownloadURL().subscribe(downloadLink => {
          this.currentFileUpload.id = '';
          this.currentFileUpload.url = downloadLink;
          this.currentFileUpload.size = this.currentFileUpload.file.size;
          this.currentFileUpload.name = this.currentFileUpload.file.name;

          this.fireStoreService.saveMetaDataOfFile(this.currentFileUpload);
        })
        this.ngOnInit();
     })
     ).subscribe( (res : any) => {
        this.percentage = Math.floor((res.bytesTransferred * 100 / res.totalBytes));
     }, err => {
        console.log('Error occured');
     });

  }

  getStarredElement() {
    this.fireStoreService.getAllFiles().subscribe( res => {
        this.listOfFiles = res.map((e : any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            // console.log(data);
            return data;
        });
    }, err => {
        console.log('Error occured while fetching file meta data');
    })
  }

  deleteFile(file : FileMetaData) {

    if(window.confirm('Are you sure you want to delete '+ file.name   + '?')) {
      this.fireStoreService.deleteFile(file);
      this.ngOnInit();
   }
  }
}
