import React, { useState } from "react";
import TextArea from "../TextArea";
import Button from "../Button";
import style from "./style.module.scss";

const AddContent = () => {
  const [text, setText] = useState("");
  const [task] = useState([]);

  function ChangeText(e) {
    setText(e.target.value);
  }

  function AddTask() {
    task.push({ tarea: text });
    localStorage.setItem("tareas", JSON.stringify(task));
    setText("");
  }

  return (
    <section className={style.addContent}>
      <TextArea value={text} change={ChangeText} />
      {text !== "" ? <Button click={AddTask} value={"Agregar Tarea"} /> : null}
    </section>
  );
};

export default AddContent;
