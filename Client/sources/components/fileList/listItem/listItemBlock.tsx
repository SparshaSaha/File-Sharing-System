import * as React from "react";
import * as CSS from "csstype";

interface IListItemBlockProps {
  title: string;
  onItemClick?: (event: React.SyntheticEvent) => void;
}

const listItemBlockStyles: CSS.Properties = {
  marginLeft: "0.2rem",
  marginRight: "0.2rem",
  marginTop: "0.1rem",
  marginBottom: "0.1rem",
  textAlign: "center",
  width: "20rem",
  background: "rgb(248,248,248)",
};

export const ListItemBlock = (props: IListItemBlockProps): JSX.Element => {
  const { title, onItemClick } = props;
  return (
    <div style={listItemBlockStyles} onClick={onItemClick}>
      {title}
    </div>
  );
};
