import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import { IMulter } from "../interfaces/multer.interface";

export const postFile = (app: IApp, upload: IMulter) => {
    app.post('/uploadFile', upload.any(), (_request: IRequest, response: IResponse) => {
        response.sendStatus(200);
    });
}