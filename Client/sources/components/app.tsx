import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import GlobalContextProvider from "../contexts/globalContext";
import { FileViewer } from "./fileListViewer";
import { FileUploader } from "./fileUpload/fileUploader";
import { DeleteDirectory } from "./directoryOps/deleteDirectory";
import { Navbar } from "./Navbar/Navbar";


export default function IApp() {
  return (
    <div className="container">
      <Navbar/>
      
          <GlobalContextProvider> 
            <FileViewer />
            <div className="mt-5">
              <FileUploader />
            </div>
            
            <DeleteDirectory />
          </GlobalContextProvider>  
      
    </div>
    
  );
}
