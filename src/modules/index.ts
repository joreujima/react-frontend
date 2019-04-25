import { combineReducers } from "redux";

import cart from "./CartModule";

export const RootReducer = () =>
  combineReducers({
    cart
  });
