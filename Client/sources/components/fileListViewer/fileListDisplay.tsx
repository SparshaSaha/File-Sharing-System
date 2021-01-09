import * as React from "react";
import { IFile } from "../../interfaces/file.interface";
import { IFolder } from "../../interfaces/folder.interface";
import { downloadFile, fetchAllFiles } from "./utils";
import { FileList } from "../fileList";
import { GlobalContext } from "../../contexts/globalContext";
/* 
Fetches all Files from Server
Maintains it's own state and shows currentDirectoryFiles
*/
export const FileViewer = () => {
  const [filesData, setFilesData] = React.useState<IFolder | undefined>(
    undefined
  );

  const { currentDir , setCurrentDir } = React.useContext(GlobalContext);
 /* const [currentDir, setCurrentDir] = React.useState<IFolder | undefined>(
    undefined
  );*/
  useFetchFilesEffect(setFilesData, setCurrentDir);
  const directories = useMemoizedFileDataPrepare(currentDir);
  const {
    directoryOnClickCallback,
    filesOnClickCallback,
  } = useOnClickCallbacks(setCurrentDir, currentDir);
  return (
    <>
      <button
        disabled={currentDir === filesData}
        onClick={() => {
        setCurrentDir(filesData);
        }}
      >
        Back to Root Directory
      </button>
      {currentDir ? (
        <FileList
          headerNames={["Name", "Size", "Type", "Path"]}
          data={directories}
          directoryOnClick={directoryOnClickCallback}
          fileOnClick={filesOnClickCallback} 
        />
      ) : null}
    </>
  );
};

// Run after the first render
// It fetches files from the server
const useFetchFilesEffect = (
  setFilesData: React.Dispatch<IFolder | undefined>,
  setCurrentDir: React.Dispatch<IFolder | undefined>
) =>
  React.useEffect(() => {
    fetchFilesAndChangeState(setFilesData, setCurrentDir);
  }, []);

const useOnClickCallbacks = (
  setCurrentDir: React.Dispatch<IFolder | undefined>,
  currentDir: IFolder | undefined
) => {
  const directoryOnClickCallback = React.useCallback(
    (_event: React.SyntheticEvent, path: string) => {
      let folderCopy: IFolder;
      currentDir.folders.forEach((folder: IFolder) => {
        if (folder.path === path) {
          folderCopy = folder;
        }
      });
      setCurrentDir(folderCopy);
    },
    [setCurrentDir, currentDir]
  );

  const filesOnClickCallback = React.useCallback(
    (_event: React.SyntheticEvent, path: string) => {
      downloadFile(path);
    },
    []
  );

  return { directoryOnClickCallback, filesOnClickCallback };
};

// Prepare current Directory data
// This function has been memoized to save computation
const useMemoizedFileDataPrepare = (currentDirData: IFolder | undefined) =>
  React.useMemo(() => {
    const directories: string[][] = [];
    if (currentDirData) {
      currentDirData.folders.forEach((folder: IFolder) => {
        const folderInfos: string[] = [];
        folderInfos.push(folder.path.split("/").pop());
        folderInfos.push("");
        folderInfos.push("directory");
        folderInfos.push(folder.path);
        folderInfos.push("dir");

        directories.push(folderInfos);
      });

      currentDirData.files.forEach((file: IFile) => {
        const fileInfos: string[] = [];
        fileInfos.push(file.name);
        fileInfos.push(`${file.size}`);
        fileInfos.push(file.type);
        fileInfos.push(file.path);
        fileInfos.push("file");

        directories.push(fileInfos);
      });
    }

    return directories;
  }, [currentDirData]);

const fetchFilesAndChangeState = async (
  setFilesData: React.Dispatch<IFolder | undefined>,
  setCurrentDir: React.Dispatch<IFolder | undefined>
) => {
  const allFiles = await fetchAllFiles();
  setFilesData(allFiles);
  setCurrentDir(allFiles);
};
