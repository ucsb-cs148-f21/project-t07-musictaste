import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import reducers from "./reducers";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);