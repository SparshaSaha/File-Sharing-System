import * as React from "react";
import GlobalContextProvider from "../contexts/globalContext";
import { FileViewer } from "./fileListViewer";
import { FileUploader } from "./fileUpload/fileUploader";
import { CreateDirectory } from "./directoryOps/createDirectory";


export default function IApp() {
  return (
    <>
    <GlobalContextProvider> 
      <FileViewer />
      <FileUploader />
      <CreateDirectory />
    </GlobalContextProvider>  
    </>
  );
}
