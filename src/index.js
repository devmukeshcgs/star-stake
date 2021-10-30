import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { history } from "./redux/store";
// THEMES
import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";

const Index = () => {
  // console.log(themes.default);
  setToLS("all-themes", themes.default);

  return <App history={history} />;
};
ReactDOM.render(
  // <AppContainer>
  <Index />,
  // </AppContainer>
  document.getElementById("root")
);
