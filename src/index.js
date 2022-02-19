import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  cartDisplay,
  loginDisplay,
  cartItemChange,
  buttonHighlight,
  routeChange,
  addItemsToUsers,
} from "./Containers/reducers";
import "./Styles/index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/B-Nazanin.ttf";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
};

const logger = createLogger();
const reducer = combineReducers({
  cartDisplay,
  cartItemChange,
  buttonHighlight,
  loginDisplay,
  routeChange,
  addItemsToUsers,
});
const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
