import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "./components/appContainer";

render(React.createElement(AppContainer, {}), document.getElementById("app-container"));