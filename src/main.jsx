import React from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.css";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
