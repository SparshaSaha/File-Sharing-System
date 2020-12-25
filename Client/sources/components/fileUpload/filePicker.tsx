import axios from "axios";
import * as React from "react";
import { uploadFileUrl } from "../../urls";

interface IFilePickerProps {
  fileToUpload: File;
  setFileToUpload: React.Dispatch<File | undefined>;
  setProgress: React.Dispatch<number>;
}

export const FilePicker = (props: IFilePickerProps) => {
  const { setFileToUpload, fileToUpload, setProgress } = props;

  // Ref to input element to reset value on file upload completion
  const inputRef = React.useRef<HTMLInputElement>();

  const { onFileUpload, onFileChange } = useUploadFileCallbacks(
    setFileToUpload,
    setProgress,
    fileToUpload,
    inputRef
  );

  return (
    <>
      <label>
        <input type="file" onChange={onFileChange} ref={inputRef} />
      </label>
      <button onClick={onFileUpload} disabled={!fileToUpload}>
        Upload File
      </button>
    </>
  );
};

const useUploadFileCallbacks = (
  setFileToUpload: React.Dispatch<File | undefined>,
  setProgress: React.Dispatch<number>,
  fileToUpload: File,
  inputRef: React.RefObject<HTMLInputElement>
) => {
  const onFileChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFileToUpload(event.target.files[0]);
    },
    [setFileToUpload]
  );

  const fileUploadProgress = React.useCallback(
    (event: ProgressEvent) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    },
    [setProgress]
  );

  const onFileUpload = React.useCallback(() => {
    handleFileUpload(
      fileToUpload,
      setFileToUpload,
      inputRef,
      fileUploadProgress,
      setProgress
    );
  }, [fileToUpload]);

  return { onFileChange, onFileUpload };
};

const handleFileUpload = async (
  fileToUpload: File,
  setFileToUpload: React.Dispatch<File | undefined>,
  inputRef: React.RefObject<HTMLInputElement>,
  fileUploadProgress: (event: any) => void,
  setProgress: React.Dispatch<number>
) => {
  let formData = new FormData();
  formData.append("file", fileToUpload, fileToUpload.name);
  try {
    await axios.post(uploadFileUrl, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: fileUploadProgress,
    });
    inputRef.current.value = "";
    setFileToUpload(undefined);
    setProgress(0);
  } catch (error) {
    console.log("Error uploading the file");
  }
};
