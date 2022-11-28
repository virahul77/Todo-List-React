import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TodoCtxProvider } from "./contex/todoContex";

ReactDOM.render(<TodoCtxProvider><App /></TodoCtxProvider>, document.getElementById("root"));