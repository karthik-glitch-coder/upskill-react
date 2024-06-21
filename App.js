import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "This is Hot Module Replacement"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi Im H1 tag of child 2"),
    React.createElement("h2", {}, "Hi Im H2 tag of child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

