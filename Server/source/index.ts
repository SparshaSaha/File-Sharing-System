import * as express from 'express';
import * as cors from 'cors';


import { IRequest, IResponse } from './interfaces/express.interface';
import { getFileFromPath } from './modules/getFileFromPath';
import { getListedFilesWithInfo } from "./modules/getListedFilesWithInfo";
import { postFile } from './modules/postFile';
import { createDirectory } from './modules/createDirectory';
import { deleteDirectory } from './modules/deleteDirectory';


const app = express();
const { PORT = 3001} = process.env;
app.use(cors());
app.use(express.json());
getListedFilesWithInfo(app);
getFileFromPath(app);
postFile(app);
createDirectory(app);
deleteDirectory(app);


app.get('/', (_request: IRequest, response: IResponse) => {
    response.send("Welcome to FileServer");
});

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
