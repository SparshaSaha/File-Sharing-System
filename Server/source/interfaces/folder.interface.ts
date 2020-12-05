import { IFile } from './file.interface';

export interface IFolder {
    files: IFile[];
    folders: IFolder[];
    path: string;
};
