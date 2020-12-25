import * as React from "react";
import { ListRow } from "./listRow";

interface IDataListProps {
  dataRows: string[][];
  directoryOnClick: (event: React.SyntheticEvent) => void;
  fileOnClick: (event: React.SyntheticEvent) => void;
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
            onItemClick={directoryOnClick}
          />
        );
      })}
      {fileData.map((row: string[]) => {
        return (
          <ListRow
            key={JSON.stringify(row)}
            rowItems={row}
            onItemClick={fileOnClick}
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
