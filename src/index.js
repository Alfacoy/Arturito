import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Container from "./components/Container";
import Arturo from "./components/Arturo";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Arturo />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
