import * as React from "react";
import { ListItemBlock } from "./listItemBlock";
import * as CSS from "csstype";

interface IListRow {
  rowItems: string[];
  onItemClick: (event: React.SyntheticEvent) => void;
}

const rowStyle: CSS.Properties = {
  marginTop: "1rem",
  width: "50rem",
  display: "flex",
  justifyContent: "space-between",
};

export const ListRow = (props: IListRow): JSX.Element => {
  const { rowItems, onItemClick } = props;
  return (
    <div style={rowStyle}>
      {rowItems[0] === "dir" || rowItems[0] === "file" ? undefined : (
        <ListItemBlock
          key={rowItems[0]}
          title={rowItems[0]}
          onItemClick={onItemClick}
        />
      )}
      {rowItems.slice(1, rowItems.length).map((rowItem: string) => {
        return rowItem === "dir" || rowItem === "file" ? undefined : (
          <ListItemBlock key={rowItem} title={rowItem} />
        );
      })}
    </div>
  );
};
