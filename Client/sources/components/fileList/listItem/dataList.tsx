import * as React from "react";
import { ListRow } from "./listRow";

interface IDataListProps {
  dataRows: string[][];
}

export const DataList = (props: IDataListProps): JSX.Element => {
  const { dataRows } = props;

  return (
    <>
      {dataRows.map((row: string[]) => {
        return <ListRow key={JSON.stringify(row)} rowItems={row} />;
      })}
    </>
  );
};
