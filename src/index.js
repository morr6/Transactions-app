import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "utilities/RootReducers";

import { ThemeProvider } from "@material-ui/core/styles";
import { MuiTheme } from "utilities/Theme";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
