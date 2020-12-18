import * as React from "react";
import { ListHeader } from "./fileList";
export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return (
    <ListHeader
      coloumnNames={["File Name", "File Size", "File Path"]}
    ></ListHeader>
  );
}
