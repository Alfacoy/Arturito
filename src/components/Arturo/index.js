import React, { useState } from "react";

import AddContent from "../AddContent";
import ShowContent from "../ShowContent";

const Arturo = () => {
  const [task, setTask] = useState([]);

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

/* localStorage.setItem("tareas", JSON.stringify(task)); */
