import * as React from "react";
import { ListRow } from "./listRow";

interface IDataListProps {
  dataRows: string[][];
  directoryOnClick: (event: React.SyntheticEvent, path: string) => void;
  fileOnClick: (event: React.SyntheticEvent, path: string) => void;
}

export const DataList = (props: IDataListProps): JSX.Element => {
  const { dataRows, directoryOnClick, fileOnClick } = props;
  const { directoryData, fileData } = useMemoizedSegregator(dataRows);

  return (
    <>
      {directoryData.map((row: string[]) => {
        return (
          <ListRow
            key={JSON.stringify(row)}
            rowItems={row}
            onItemClick={(event: React.SyntheticEvent) => {
              // Extracting path
              const path = row[3];
              // Storing path in this method's closure will help us to switch directory on click
              directoryOnClick(event, path);
            }}
          />
        );
      })}
      {fileData.map((row: string[]) => {
        return (
          <ListRow
            key={JSON.stringify(row)}
            rowItems={row}
            onItemClick={(event: React.SyntheticEvent) => {
              const path = row[3];
              fileOnClick(event, path);
            }}
          />
        );
      })}
    </>
  );
};

const useMemoizedSegregator = (dataRows: string[][]) =>
  React.useMemo(() => {
    const directoryData: string[][] = [];
    const fileData: string[][] = [];
    dataRows.forEach((dataRow: string[]) => {
      if (dataRow[dataRow.length - 1] === "dir") {
        directoryData.push(dataRow);
      } else {
        fileData.push(dataRow);
      }
    });
    return { directoryData, fileData };
  }, [dataRows]);
