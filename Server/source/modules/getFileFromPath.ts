import { errorCodes } from "../errorCodes/errorCodes";
import { IApp, IRequest, IResponse } from "../interfaces/express.interface";

export const getFileFromPath = (app: IApp) => {
    app.get("/getFileFromPath", (request: IRequest, response: IResponse) => {
        const filePath = request.query.filePath as string;
        try {
            response.download(filePath);
        } catch(error) {
            response.status(errorCodes.FILE_NOT_FOUND_ERROR_CODE).send(errorCodes.FILE_NOT_FOUND_ERROR);
        }
    });
}
