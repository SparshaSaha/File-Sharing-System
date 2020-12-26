import { AxiosResponse } from 'axios';
import axios from 'axios';
import * as FileSaver from "file-saver";
import { IFolder } from '../../interfaces/folder.interface';
import { downloadFileUrl, getFilesUrl } from '../../urls';

export const fetchAllFiles = async () => {
    try {
    const response: AxiosResponse<IFolder> = await axios.get(getFilesUrl);
    return response.data;
    } catch(error) {
        console.error("Error getting all files");
    }
};

export const downloadFile = async (path: string) => {
    try {
    const response = await axios.get(downloadFileUrl, {
        params: {
            filePath: path
        },
        responseType: 'blob'
    });
    FileSaver.saveAs(response.data, path.split('/').pop())
    } catch(error) {
        console.error("Error downloading file");
    }
}
