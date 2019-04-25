import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";

import "./index.css";

ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.unregister();
