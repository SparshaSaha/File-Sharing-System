import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import * as fs from 'fs';

export const createDirectory = (app: IApp) =>{
     
    app.post('/createDirectory',(req: IRequest,resp: IResponse)=>{
                
        const reqPath = req.body.path;             //path to create new folder 
        const dirName = req.body.folderName;      //name of new folder to be created
        
        if(validatePath(reqPath)){
            const msg = createDirectory(reqPath,dirName);
            resp.send({ msg : msg});
        }
        else{
            resp.send({ msg : "Invalid path !"}).status(400);
        }
    })

    const validatePath = (path: string) =>{
         if(fs.existsSync(path))
            return true;
         else
            return false;   
    }

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