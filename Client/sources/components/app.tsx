import * as React from "react";
import { FileList } from "./fileList";
import { FileUploader } from "./fileUpload/fileUploader";
export interface IAppProps {}

export default function IApp(props: IAppProps) {
  const [fileToUpload, setFileToUpload] = React.useState(undefined);

  const onFileUpload = React.useCallback(() => {
    console.log("Upload File");
  }, []);
  return (
    <>
      <FileList
        headerNames={["File Name", "File Size", "File Path"]}
        data={[
          ["Sparsha.txt", "200kb", "TestPath"],
          ["Spurjya.txt", "200kb", "TestPath"],
          ["Sparsha.txt", "200kb", "TestPath"],
          ["Spurjya.txt", "200kb", "TestPath"],
          ["Sparsha.txt", "200kb", "TestPath"],
          ["Spurjya.txt", "200kb", "TestPath"],
          ["Sparsha.txt", "200kb", "TestPath"],
          ["Spurjya.txt", "200kb", "TestPath"],
        ]}
      />
      <FileUploader />
    </>
  );
}
