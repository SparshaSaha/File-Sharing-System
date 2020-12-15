import * as React from "react";
import { ListHeader } from "./fileList";
export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return <ListHeader coloumnNames={["Hello", "One", "Two"]}></ListHeader>;
}
