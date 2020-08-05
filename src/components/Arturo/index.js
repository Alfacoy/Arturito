import React, { useState, useEffect } from "react";

import AddContent from "../AddContent";
import ShowContent from "../ShowContent";

const Arturo = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(JSON.parse(localStorage.getItem("task")));
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  function GetState(text) {
    setTask([...task, { task: text }]);
  }

  return (
    <section>
      <AddContent state={GetState} />
      <ShowContent state={task} />
    </section>
  );
};

export default Arturo;
