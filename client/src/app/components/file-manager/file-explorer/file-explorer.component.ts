import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbMenuService, NbTrigger} from '@nebular/theme';
import { RenameFolderDialogComponent } from '../modals/rename-folder-dialog/rename-folder-dialog.component';
import { filter, map } from 'rxjs';
import { CreateFolderDialogComponent } from '../modals/create-folder-dialog/create-folder-dialog.component';
import { FileElement } from 'src/app/models/file-element.model';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StringLimitPipe } from 'src/app/pipes/limitTo.pipe';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FileMetaData } from 'src/app/models/file-metadata.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
  providers: [
    StringLimitPipe
  ],
})
export class FileExplorerComponent implements OnInit {

  constructor(public dialog: NbDialogService,
    public matdiaLog: MatDialog,
    private firesStoreService: FirestoreService,
    private fireStoreService: FirestoreService,
) { }

  ngOnInit(): void {
  }
  @Input() fileElements: FileElement[]
  @Input() canNavigateUp: string
  @Input() path: string

  @Output() folderAdded = new EventEmitter<{ name: string }>()
  @Output() elementRemoved = new EventEmitter<FileElement>()
  @Output() elementRenamed = new EventEmitter<FileElement>()
  @Output() elementMoved = new EventEmitter<{
    element: FileElement
    moveTo: FileElement
  }>()
  @Output() elementStar = new EventEmitter <{ change : boolean}>()


  @Output() navigatedDown = new EventEmitter<FileElement>()
  @Output() navigatedUp = new EventEmitter()

    
  deleteElement(element : FileElement | FileMetaData) {
    if(window.confirm('Are you sure you want to delete '+ element.name   + '?')) {
      this.elementRemoved.emit(element);
      this.fireStoreService.deleteElement(element);
      // this.ngOnInit();
   }
  }


  // deleteElement(element: FileElement) {
  //   this.elementRemoved.emit(element);
  //   this.fileUploadCom.deleteElement(element);
  // }

  starredElement(element: boolean) {

  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    this.dialog.open(CreateFolderDialogComponent)
    .onClose.subscribe(res => {
      if(res){
        this.folderAdded.emit({name: res})
        this.firesStoreService.saveMetaDateOfFolder({name: res})
      }
    })
  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.matdiaLog.open(RenameFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }
  openMenu(event: MouseEvent, element: FileElement, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

}
