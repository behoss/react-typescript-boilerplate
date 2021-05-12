import React from "react";
import ReactDOM from "react-dom";
import App from "../src";
// import App from "../lib";

const root = document.createElement("DIV");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById("root"));
