import React from "react";
import classes from "./Header.module.css";
import NameInput from "../NameInput";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <NameInput />
    </header>
  );
}

export default Header;
