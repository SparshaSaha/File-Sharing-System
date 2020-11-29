import * as fs from 'fs';
import * as path from 'path';
import {IApp, IRequest, IResponse} from "../types/types.interface";


export const getListedFilesWithInfo = (app: IApp) => {
    const baseDir = path.join(__dirname, "../source/");
    
    app.get('/getFilesDetails', (req: IRequest, res: IResponse) => {
        fs.readdir(baseDir, (err: Error, files: string[]) => {
            if(err) {
                console.log(err);
            }
            files.forEach((file: string) => {
                const stat = fs.statSync(path.join(baseDir, file));
                console.log(stat);
            });
            res.send({files});
        });
    });
};
