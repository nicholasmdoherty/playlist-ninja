import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider
      store={configureStore({ api: null, playlist: { editablePlaylists: [] } })}
    >
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
