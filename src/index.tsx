import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const container = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
