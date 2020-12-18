import * as React from "react";
import { FileList } from "./fileList";
export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return (
    <FileList
      headerNames={["File Name", "File Size", "File Path"]}
      data={[
        ["Sparsha.txt", "200kb", "TestPath"],
        ["Spurjya.txt", "200kb", "TestPath"],
        ["Sparsha.txt", "200kb", "TestPath"],
        ["Spurjya.txt", "200kb", "TestPath"],
        ["Sparsha.txt", "200kb", "TestPath"],
        ["Spurjya.txt", "200kb", "TestPath"],
        ["Sparsha.txt", "200kb", "TestPath"],
        ["Spurjya.txt", "200kb", "TestPath"],
      ]}
    ></FileList>
  );
}
