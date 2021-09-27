import { createStore } from "redux";
import MyReducer from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(MyReducer, composeWithDevTools());
