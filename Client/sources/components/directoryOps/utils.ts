import Axios from "axios";
import axios, { AxiosResponse } from 'axios';
import { createDirectoryUrl, deleteDirectoryUrl } from '../../urls';

export const makeDirectory = async (path: string, folderName: string) =>{
    
    try{
        const response = await axios.post(createDirectoryUrl,{ path : path, folderName : folderName });
        return response.data;
    }
    catch(err){
        console.log("Failed to create directory !");  
    }
}

export const removeDirectory = async (path: string) =>{

    try{
        const response = await axios.delete(deleteDirectoryUrl,{data : { path : path }});
        return response.data;
    }
    catch(err){
        console.log("failed to delete !");
    }
}