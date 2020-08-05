import React, { useState } from "react";
import TextArea from "../TextArea";
import Button from "../Button";
import style from "./style.module.scss";

const AddContent = ({ state }) => {
  const [text, setText] = useState("");

  function ChangeText(e) {
    setText(e.target.value);
  }

  function AddTask() {
    state(text);
    setText("");
  }

  return (
    <div className={style.addContent}>
      <TextArea value={text} change={ChangeText} />
      {text !== "" ? <Button click={AddTask} value={"Agregar Tarea"} /> : null}
    </div>
  );
};

export default AddContent;
