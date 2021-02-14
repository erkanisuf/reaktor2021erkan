import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./Context/ContextApi";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
