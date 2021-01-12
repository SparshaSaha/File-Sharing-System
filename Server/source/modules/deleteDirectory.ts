import { IApp, IRequest, IResponse } from "../interfaces/express.interface";
import { validatePath } from "./utils";
import * as fs from 'fs';

export const deleteDirectory = (app: IApp) =>{

    app.delete('/deleteDirectory',(reqs: IRequest,resp: IResponse)=>{

        const path = reqs.body.path;
        if(validatePath(path)){
            try{
                fs.rmdirSync(path,{recursive: true});
                resp.send({msg : "deleted successfully !"});
            }
            catch(err){
                console.log("failed to delete directory !");
                resp.send({msg : "failed to delete directory !"});
            }
        }
        else{
            console.log("invalid path!");
            resp.send({msg: "invalid path!"});
        }

    })
}