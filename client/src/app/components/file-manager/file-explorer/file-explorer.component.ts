import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbMenuService} from '@nebular/theme';
import { RenameFolderDialogComponent } from '../modals/rename-folder-dialog/rename-folder-dialog.component';
import { filter, map } from 'rxjs';
import { CreateFolderDialogComponent } from '../modals/create-folder-dialog/create-folder-dialog.component';
import { FileElement } from 'src/app/models/file-element.model';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  constructor(public dialog: NbDialogService) { }

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
  @Output() navigatedDown = new EventEmitter<FileElement>()
  @Output() navigatedUp = new EventEmitter()


  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
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
    let dialogRef = this.dialog.open(CreateFolderDialogComponent);
    dialogRef.onClose.subscribe(res => {
      console.log(res);
      if(res){
        this.folderAdded.emit({name: res})
        
      }
    })

  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.dialog.open(RenameFolderDialogComponent);
    dialogRef.onClose.subscribe(res => {
      if(res){
        element.name = res;
        this.elementRenamed.emit(element);
      }
    })

  }

}
