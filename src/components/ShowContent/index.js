import React from "react";

const ShowContent = ({ state }) => {
  const showList = state.map((e, index) => <li key={index}>{e.task}</li>);
  return (
    <section>
      <h1>Arturito</h1>
      <ul>{showList}</ul>
    </section>
  );
};

export default ShowContent;
