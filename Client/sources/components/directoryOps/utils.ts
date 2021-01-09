import Axios from "axios"

import axios, { AxiosResponse } from 'axios';
import { createDirectoryUrl } from '../../urls';

export const makeDirectory = async (path: string, folderName: string) =>{
    
    try{
        const response = await axios.post(createDirectoryUrl,{ path : path, folderName : folderName });
        return response.data;
    }
    catch(err){
        console.log("Failed to create directory !");  
    }
}