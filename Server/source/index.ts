import * as express from 'express';
import { IRequest, IResponse } from './interfaces/express.interface';
import { getFileFromPath } from './modules/getFileFromPath';
import { getListedFilesWithInfo } from "./modules/getListedFilesWithInfo";

const app = express();
const { PORT = 3001} = process.env;

getListedFilesWithInfo(app);
getFileFromPath(app);

app.get('/', (_request: IRequest, response: IResponse) => {
    response.send("Welcome");
});

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
