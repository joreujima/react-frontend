import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../views/Home";
import { Provider } from "react-redux";
import { store } from "../store";

import { hot } from "react-hot-loader/root";
const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>
);

export default hot(Routes);
