import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import { validatePath } from "./utils";
import * as fs from 'fs';

export const createDirectory = (app: IApp) =>{
     
    app.post('/createDirectory',(request: IRequest, response: IResponse)=>{
                
        const reqPath = request.body.path;             //path to create new folder 
        const dirName = request.body.folderName;      //name of new folder to be created
        
        if(validatePath(reqPath)){
            const msg = createDirectory(reqPath,dirName);
            response.send({ msg : msg});
        }
        else{
            response.send({ msg : "Invalid path !"}).status(400);
        }
    })

    const createDirectory = (path: string, dirName: string) =>{
          try{
              fs.mkdir(path+"/"+dirName,(err)=>{
                  if(err) throw err;
              });
              return "Directory created successfully !";
          }
          catch(err){
             // console.log(err);
              return "Failed to create directory !";
          }
    }
}