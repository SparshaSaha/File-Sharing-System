import * as React from "react";

interface IHeaderBlockProps {
  headerName: string;
}

export const HeaderBlock = (props: IHeaderBlockProps): JSX.Element => {
  const { headerName } = props;
  return <div> {headerName} </div>;
};
