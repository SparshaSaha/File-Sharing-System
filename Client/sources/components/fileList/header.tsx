import * as React from "react";
import { HeaderBlock } from "./headerBlock";
import * as CSS from "csstype";

interface IListHeaderProps {
  coloumnNames: string[];
}

const divStyles: CSS.Properties = {
  marginTop: "5rem",
  marginLeft: "10rem",
  width: "50rem",
  display: "flex",
  justifyContent: "space-between",
};

export const ListHeader = (props: IListHeaderProps) => {
  const { coloumnNames } = props;
  return (
    <div style={divStyles}>
      {coloumnNames.map((coloumnName: string) => (
        <HeaderBlock key={coloumnName} headerName={coloumnName}></HeaderBlock>
      ))}
    </div>
  );
};
