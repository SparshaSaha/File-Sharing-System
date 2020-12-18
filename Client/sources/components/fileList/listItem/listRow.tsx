import * as React from "react";
import { ListItemBlock } from "./listItemBlock";
import * as CSS from "csstype";

interface IListRow {
  rowItems: string[];
}

const rowStyle: CSS.Properties = {
  marginTop: "1rem",
  width: "50rem",
  display: "flex",
  justifyContent: "space-between",
};

export const ListRow = (props: IListRow) => {
  const { rowItems } = props;
  return (
    <div style={rowStyle}>
      {rowItems.map((rowItem: string) => {
        return <ListItemBlock key={rowItem} title={rowItem} />;
      })}
    </div>
  );
};
