import * as React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="./icon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        ></img>
        File Sharing System
      </a>
    </nav>
  );
};
