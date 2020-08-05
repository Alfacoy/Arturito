import React from "react";

const ShowContent = ({ state }) => {
  const showList = state.map((item, index) => <li key={index}>{item.task}</li>);
  return (
    <section>
      <h3>Lista de tareas</h3>
      <ul>{showList}</ul>
    </section>
  );
};

export default ShowContent;
