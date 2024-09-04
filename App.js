import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [
      React.createElement("h1", {}, "I am the H1 from OYE LODU"),
      React.createElement("h2", {}, "I am the H2 from "),
    ]),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "I am the H1 from child2"),
      React.createElement("h2", {}, "I am the H2 from child2"),
    ])]
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
