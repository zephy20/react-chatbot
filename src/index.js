import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "./ChatBot";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <ChatBot />
  </Provider>,
  document.getElementById("root")
);
