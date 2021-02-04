import * as fs from 'fs';
import * as path from 'path';
import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import { IFile } from "../interfaces/file.interface";
import { IFolder } from "../interfaces/folder.interface";
import { promisify } from 'util';
import { errorCodes } from '../errorCodes/errorCodes';

const readdir = promisify(fs.readdir);

export const getListedFilesWithInfo = (app: IApp) => {
    const baseDir = path.join(__dirname, "../Database");
    let reqPath: string;

    app.get('/getFilesDetails', async (_request: IRequest, response: IResponse) => {
        if(_request.query.path)
            reqPath = String(_request.query.path);
        else
            reqPath = baseDir;    
              
        recursivelyParseFolders(reqPath).then((folder: IFolder) => {
            response.status(200).json(folder);
        }).catch((_error: Error) => {
            response.status(errorCodes.INTERNAL_SERVER_ERROR).send({});
        });
    });
};

const recursivelyParseFolders = async (path: string) => {
    const currentFolder: IFolder = { files: [], folders: [], path };
    const content = await readdir(path);
    const subFolderPromises: Promise<IFolder>[] = [];
 
    content.forEach((entity: string) => {
        const fileStats = fs.statSync(`${path}/${entity}`);
        if(fileStats.isFile()) {
            const currentFile = {
                name: entity,
                path: `${path}/${entity}`,
                type: entity.split('.')[1],
                size: fileStats.size
            } as IFile;
            currentFolder.files.push(currentFile);
        } else {
            subFolderPromises.push(new Promise((resolve, reject) => {
                 return recursivelyParseFolders(`${path}/${entity}`).then((folder: IFolder) => {
                    resolve(folder);
                }).catch((_error: Error) => {
                    reject(`${errorCodes.FOLDER_PARSE_ERROR} path = ${path}/${entity}`);
                });
            }));
        }
    });

    try {
    const subFolderResults = await Promise.all(subFolderPromises);
    subFolderResults.forEach((folder: IFolder) => {
        currentFolder.folders.push(folder);
    });
    } catch(e) {
        throw new Error(e);
    }
    return currentFolder;
};
