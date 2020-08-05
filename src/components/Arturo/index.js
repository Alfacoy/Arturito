import React, { useState, useEffect } from "react";

import AddContent from "../AddContent";
import ShowContent from "../ShowContent";

const Arturo = () => {
  const [task, setTask] = useState([]);
  const noTaskMessage = "No hay tareas pendientes.";

  useEffect(() => {
    if (localStorage.getItem("task") === null) {
      localStorage.setItem("task", JSON.stringify([{ task: noTaskMessage }]));
    }
    setTask(JSON.parse(localStorage.getItem("task")));
  }, []);

  useEffect(() => {
    if (task[0] !== undefined) {
      if (task[0].task === noTaskMessage && task[1] !== undefined) {
        setTask(task.filter((item) => item.task !== noTaskMessage));
      }
    }
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  function GetState(text) {
    setTask([...task, { task: text }]);
  }

  return (
    <section>
      <h1>Arturito</h1>
      <AddContent state={GetState} />
      <ShowContent state={task} />
    </section>
  );
};

export default Arturo;
