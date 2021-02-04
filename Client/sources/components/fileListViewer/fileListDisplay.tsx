import * as React from "react";
import { IFile } from "../../interfaces/file.interface";
import { IFolder } from "../../interfaces/folder.interface";
import { downloadFile, fetchAllFiles, fetchDirectoryByPath } from "./utils";
import { FileList } from "../fileList";
import { GlobalContext } from "../../contexts/globalContext";
import { CreateDirectory } from "../directoryOps/createDirectory";

/* 
Fetches all Files from Server
Maintains it's own state and shows currentDirectoryFiles
*/
export const FileViewer = () => {
  const {
    currentDir,
    setCurrentDir,
    filesData,
    setFilesData,
  } = React.useContext(GlobalContext);

  useFetchFilesEffect(setFilesData, setCurrentDir);

  // Figures out all files/folders within currentDir
  const directories = useMemoizedFileDataPrepare(currentDir);

  const {
    directoryOnClickCallback,
    filesOnClickCallback,
  } = useOnClickCallbacks(setCurrentDir, currentDir);

  // Handles the back button click and moves one level up
  const levelUp = async () => {
    const tempPath = currentDir.path.slice(0, currentDir.path.lastIndexOf("/"));
    if (tempPath === filesData.path) setCurrentDir(filesData);
    else setCurrentDir(await fetchDirectoryByPath(tempPath));
  };

  const setDirCallback = React.useCallback(() => {
    setCurrentDir(filesData);
  }, []);
  return (
    <>
      <div className="container d-flex flex-row">
        <button
          className="btn btn-danger"
          disabled={currentDir === filesData}
          onClick={setDirCallback}
        >
          Back to Root Directory
        </button>
        <button
          type="button"
          className="btn btn-primary ml-3"
          disabled={currentDir === filesData}
          onClick={levelUp}
        >
          Back
        </button>
        <div className="ml-5">
          <CreateDirectory />
        </div>
      </div>
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
  //runs everytime currentDirectory changes
  React.useMemo(() => {
    const directories: string[][] = [];
    if (currentDirData) {
      currentDirData.folders.forEach((folder: IFolder) => {
        //preparing all folder info within currentDir
        const folderInfos: string[] = [];
        folderInfos.push(folder.path.split("/").pop());
        folderInfos.push("");
        folderInfos.push("directory");
        folderInfos.push(folder.path);
        folderInfos.push("dir");

        directories.push(folderInfos);
      });

      currentDirData.files.forEach((file: IFile) => {
        //preparing all files info within currentDirectory
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
