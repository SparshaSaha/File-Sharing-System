import * as React from "react";
import { FileViewer } from "./fileListViewer";
import { FileUploader } from "./fileUpload/fileUploader";
export interface IAppProps {}

export default function IApp(props: IAppProps) {
  // Callback to execute when clicked on directory
  const directoryC = React.useCallback((event: React.SyntheticEvent) => {
    console.log(`Clicken on Dir:- ${(event.target as HTMLElement).innerHTML}`);
  }, []);

  // Callback to execute when clicked on a file (download the file)
  const fileC = React.useCallback((event: React.SyntheticEvent) => {
    console.log(`Clicken on File:- ${(event.target as HTMLElement).innerHTML}`);
  }, []);
  return (
    <>
      <FileViewer />
      <FileUploader />
    </>
  );
}
