import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Container from "./components/Container";
import AddContent from "./components/AddContent";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <AddContent />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
