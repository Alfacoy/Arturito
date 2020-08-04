import React from "react";
import style from "./style.module.scss";

const Container = ({ children }) => {
  return <main className={style.container}>{children}</main>;
};

export default Container;
