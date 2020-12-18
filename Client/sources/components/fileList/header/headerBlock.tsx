import * as React from "react";
import * as CSS from "csstype";

interface IHeaderBlockProps {
  headerName: string;
}

const blockStyles: CSS.Properties = {
  color: "HighlightText",
  marginLeft: "0.2rem",
  marginRight: "0.2rem",
  marginTop: "0.5rem",
  fontSize: "130%",
  width: "20rem",
  background: "rgb(245,245,245)",
  textAlign: "center",
};

export const HeaderBlock = (props: IHeaderBlockProps): JSX.Element => {
  const { headerName } = props;
  return <div style={blockStyles}> {headerName} </div>;
};
