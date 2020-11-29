import * as express from 'express';
import {getListedFilesWithInfo} from "./getListedFilesWithInfo";

const app = express();
const { PORT = 3001} = process.env;

getListedFilesWithInfo(app);

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});