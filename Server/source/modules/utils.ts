import * as fs from 'fs';

export const validatePath = (path: string) =>{
         if(fs.existsSync(path))
            return true;
         else
            return false;   
    }