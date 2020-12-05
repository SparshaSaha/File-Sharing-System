import * as express from 'express';
import { IRequest, IResponse } from './interfaces/express.interface';
import { getListedFilesWithInfo } from "./modules/getListedFilesWithInfo";

const app = express();
const { PORT = 3001} = process.env;

getListedFilesWithInfo(app);

app.get('/', (request: IRequest, response: IResponse) => {
    response.send("Random Data");
});

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});