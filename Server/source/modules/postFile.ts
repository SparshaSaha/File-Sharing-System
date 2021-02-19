import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import * as multer from "multer";
import { IMulterFile, IMulterDestinationCallback, IMulterFileNameCallback, IMulter } from "../interfaces/multer.interface";


const fileStorage = multer.diskStorage({
    destination: (request: IRequest, file: IMulterFile, callback: IMulterDestinationCallback) => {
        const { filePath } = request.body;
        console.log(`Uploading file: ${file.originalname}`);
        callback(null, filePath);
    },
    filename: (_request: IRequest, file: IMulterFile, callback: IMulterFileNameCallback) => {
        callback(null, file.originalname);
    }
});

const upload: IMulter = multer({ storage: fileStorage });

export const postFile = (app: IApp) => {
    app.post('/uploadFile', upload.any(), (_request: IRequest, response: IResponse) => {
        response.sendStatus(200);
    });
}

