import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import productReducer from "./productReducer";
import signInReducer from "./signInReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
  };
  
const persistedSignInInfo = persistReducer(persistConfig, signInReducer);

const mainReducer = combineReducers({
    productStore: productReducer,
    signInStore: persistedSignInInfo,
    allUserStore: userReducer,
  });
  
  export default mainReducer;