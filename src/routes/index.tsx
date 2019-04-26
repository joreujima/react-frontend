import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../views/Home";
import { Provider } from "react-redux";
import { store } from "../store";

import { hot } from "react-hot-loader/root";
import Setting from "../views/Setting";
import { Layout } from "../layouts/Layout";
const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/setting" exact component={Setting} />
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default hot(Routes);
