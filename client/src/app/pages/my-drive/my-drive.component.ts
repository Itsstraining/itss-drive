import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbMenuService} from '@nebular/theme';
import { RenameFolderDialogComponent } from '../../components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';
import { filter, map } from 'rxjs';
import { CreateFolderDialogComponent } from '../../components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';
import { FileElement } from 'src/app/models/file-element.model';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit{
  constructor(
    private dialogService: NbDialogService,
    private nbMenuService: NbMenuService,
    private dialog: NbDialogService,
    ){}
  // names: string[] =[];
  ngOnInit(): void {
    // this.nbMenuService.onItemClick().
    // pipe(
    //   filter(({ tag }) => tag ==="open-rename-dialog"),
    //   map(({ item: {title} }) => title),
    // ).subscribe(title =>  this.dialogService.open(RenameFolderDialogComponent))
  }
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

  // openMenu(event: MouseEvent, element:FileElement){
  //   event.preventDefault();
  // }

}
