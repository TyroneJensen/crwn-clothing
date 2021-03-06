import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middelwares = [thunk];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middelwares));

export const persistor = persistStore(store);
