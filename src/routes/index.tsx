import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../views/Home";
import { Provider } from "react-redux";
import { store } from "../store";

export const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>
);
