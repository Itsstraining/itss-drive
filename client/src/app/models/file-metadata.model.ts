export class FileMetaData {
    id : string ='';
    name : string = '';
    size : number = 0;
    file : File;
    url : string = '';
    isFolder: boolean = false;
    parent?: string = '';
    isStarred: boolean = false;
    createAt: string = '';


    constructor(file : File) {
      this.file = file;
    }
}