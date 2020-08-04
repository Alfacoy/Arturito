import React from "react";
import style from "./style.module.scss";

const TextArea = ({ value, change }) => {
  return (
    <textarea
      className={`${style.textArea}`}
      value={value}
      onChange={change}
    ></textarea>
  );
};

export default TextArea;
