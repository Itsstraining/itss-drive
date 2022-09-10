import { FileElement } from "./file-element.model";
import { FileMetaData } from "./file-metadata.model";

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    element: FileMetaData | FileElement;
}