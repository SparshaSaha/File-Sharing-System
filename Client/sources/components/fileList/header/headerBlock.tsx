import * as React from "react";
import "../../../styles/headerBlock.css";
interface IHeaderBlockProps {
  headerName: string;
}

export const HeaderBlock = (props: IHeaderBlockProps): JSX.Element => {
  const { headerName } = props;
  return <div className={"blockStyles"}> {headerName} </div>;
};
