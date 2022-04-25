import React, { createContext } from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import UserStore from "./Store/UserStore";
import CourseStore from "./Store/CourseStore";

export const Context = createContext(null);

console.log(process.env.REACT_APP_API_URL);
ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      course: new CourseStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
