import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../views/Home";

export const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);
