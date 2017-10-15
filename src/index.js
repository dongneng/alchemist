import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import rootReducer from "reducers";
import { Provider } from "react-redux";

import { createDpTable } from "algorithms/edit-distance/algorithm";

import EditDistance from "algorithms/edit-distance";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const store = createStore(rootReducer);

console.log(createDpTable("abcdef", "azced"));

console.log(createDpTable("abcde", "defbf"));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <EditDistance />
  </Provider>,
  document.getElementById("redux-test")
);
