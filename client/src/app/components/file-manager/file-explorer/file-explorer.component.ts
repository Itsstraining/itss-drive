import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
<<<<<<< HEAD
import { NbContextMenuDirective, NbDialogService, NbMenuService, NbTrigger} from '@nebular/theme';
=======
import { NbContextMenuDirective, NbDialogService, NbMenuService} from '@nebular/theme';
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
import { RenameFolderDialogComponent } from '../modals/rename-folder-dialog/rename-folder-dialog.component';
import { filter, map } from 'rxjs';
import { CreateFolderDialogComponent } from '../modals/create-folder-dialog/create-folder-dialog.component';
import { FileElement } from 'src/app/models/file-element.model';
<<<<<<< HEAD
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

<<<<<<< HEAD
  constructor(public dialog: NbDialogService,
    private nbMenuService: NbMenuService,
    public matdiaLog: MatDialog,
) { }

  ngOnInit(): void {
    // this.nbMenuService.onItemClick()
    //   .pipe(
    //     filter(({ tag }) => tag === 'my-context-menu'),
    //     map(({ item: { title } }) => title),
    //   )
    //   .subscribe(title => this.openRenameDialog(eleme));
=======
  constructor(public dialog: NbDialogService) { }

  ngOnInit(): void {
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
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

<<<<<<< HEAD
  starredElement(element: FileElement) {

  }

=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
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
<<<<<<< HEAD
    this.dialog.open(CreateFolderDialogComponent)
    .onClose.subscribe(res => {
      if(res){
        this.folderAdded.emit({name: res})
      }
    })
  }

  // openRenameDialog(element: FileElement) {
  //   let dialogRef = this.dialog.open(RenameFolderDialogComponent);
  //   dialogRef.onClose.subscribe(res => {
  //     if(res){
  //       element.name = res;
  //       this.elementRenamed.emit(element);
  //     }
  //   })
  // }

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

  // ----------Context Menu-----------------
  // items = [
  //   { title: 'Rename' },
  //   { title: 'Mark as favorites'}
  // ];

  // @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  // open() {
  //   this.contextMenu.show();
  //   return false;
  // }

  // @HostListener('document:click')
  // close() {
  //   this.contextMenu.hide();
  // }

=======
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
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3

}
