import * as React from "react";
import { FileViewer } from "./fileListViewer";
import { FileUploader } from "./fileUpload/fileUploader";

export default function IApp() {
  return (
    <>
      <FileViewer />
      <FileUploader />
    </>
  );
}
