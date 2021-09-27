import { createStore, applyMiddleware } from "redux";
// import productReducer from "./store";
import thunk from "redux-thunk";
import mainReducer from "./store";
import {persistStore} from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, composeEnhancer);

export const persistor = persistStore(store);
