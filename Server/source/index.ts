import * as express from 'express';
import * as cors from 'cors';
import * as multer from "multer";
import * as path from "path";

import { IRequest, IResponse } from './interfaces/express.interface';
import { getFileFromPath } from './modules/getFileFromPath';
import { getListedFilesWithInfo } from "./modules/getListedFilesWithInfo";
import { postFile } from './modules/postFile';
import { IMulterFile, IMulterDestinationCallback, IMulterFileNameCallback, IMulter } from './interfaces/multer.interface';
import { createDirectory } from './modules/createDirectory';

const fileStorage = multer.diskStorage({
    destination: (_request: IRequest, file: IMulterFile, callback: IMulterDestinationCallback) => {
        console.log(`Uploading file: ${file.originalname}`);
        callback(null, path.join(__dirname, "../Database"));
    },
    filename: (_request: IRequest, file: IMulterFile, callback: IMulterFileNameCallback) => {
        callback(null, file.originalname);
    }
});

const upload: IMulter = multer({ storage: fileStorage });

const app = express();
const { PORT = 3001} = process.env;
app.use(cors());
app.use(express.json());
getListedFilesWithInfo(app);
getFileFromPath(app);
postFile(app, upload);
createDirectory(app);


app.get('/', (_request: IRequest, response: IResponse) => {
    response.send("Welcome to FileServer");
});

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
