import * as React from "react";
import { FileList } from "./fileList";
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
      <FileList
        headerNames={["File Name", "File Size", "File Path"]}
        data={[
          ["Sparsha.txt", "200kb", "TestPath", "dir"],
          ["Spurjya.txt", "200kb", "TestPath", "file"],
          ["Sparsha.pdf", "200kb", "TestPath", "dir"],
          ["Spurjya.pdf", "200kb", "TestPath", "file"],
          ["Sparsha.pptx", "200kb", "TestPath", "dir"],
          ["Spurjya.pptx", "200kb", "TestPath", "file"],
        ]}
        directoryOnClick={directoryC}
        fileOnClick={fileC}
      />
      <FileUploader />
    </>
  );
}
