import * as React from "react";
import { FilePicker } from "./filePicker";

export const FileUploader = (): JSX.Element => {
  const [fileToUpload, setFileToUpload] = React.useState<File | undefined>();
  const [progress, setProgress] = React.useState<number>(0);
  return (
    <>
      <FilePicker
        fileToUpload={fileToUpload}
        setFileToUpload={setFileToUpload}
        setProgress={setProgress}
      />
      <div role="progress">{progress}</div>
    </>
  );
};
