import * as React from "react";
import { HeaderBlock } from "./headerBlock";
import "../../../styles/header.css";

interface IListHeaderProps {
  coloumnNames: string[];
}

export const ListHeader = (props: IListHeaderProps): JSX.Element => {
  const { coloumnNames } = props;
  return (
    <div className={"divStyles"}>
      {coloumnNames.map((coloumnName: string) => (
        <HeaderBlock key={coloumnName} headerName={coloumnName}></HeaderBlock>
      ))}
    </div>
  );
};
