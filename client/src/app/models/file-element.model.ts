export interface FileElement{
    id?: string;
    isFolder?: boolean;
    name?: string;
    parent?: string;
    isStarred?: boolean;
    createAt?: string;
    size? : number;
    url? : string;
}

// export class FileElement{
//     id?: string = '';
//     isFolder?: boolean = false;
//     name?: string = '';
//     size?: number = 0;
//     file: File;
//     url: string = '';
//     parent?: string;
//     isStarred?: boolean;
//     createAt?: string;

//     constructor(file : File) {
//         this.file = file;
//       }
// }
