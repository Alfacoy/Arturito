import React from "react";
import style from "./style.module.scss";

const Button = ({ click, value }) => {
  return (
    <input
      type="button"
      value={value}
      onClick={click}
      className={`${style.btn} ${style.btn__color}`}
    ></input>
  );
};

export default Button;
