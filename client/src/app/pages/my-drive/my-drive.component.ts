import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbMenuService} from '@nebular/theme';
import { RenameFolderDialogComponent } from '../../components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';
import { filter, map } from 'rxjs';
import { CreateFolderDialogComponent } from '../../components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';


@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit{
  constructor(
    public renameDialog: RenameFolderDialogComponent, 
    private dialogService: NbDialogService,
    private nbMenuService: NbMenuService,
    private createDialog: CreateFolderDialogComponent,
    ){}
  names: string[] =[];
  ngOnInit(): void {
    this.nbMenuService.onItemClick().
    pipe(
      filter(({ tag }) => tag ==="open-rename-dialog"),
      map(({ item: {title} }) => title),
    ).subscribe(title =>  this.dialogService.open(RenameFolderDialogComponent))
  }
  @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  items = [
    { title: 'Rename' },
    { title: 'Mark as favorites'},
    { title: 'Move to Recycle Bin' },
  ];


  openContextMenu() {
    this.contextMenu.show();
    return false;
  }

  @HostListener('document:click')
  closeContextMenu() {
    this.contextMenu.hide();
  }

  

}
