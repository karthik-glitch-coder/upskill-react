/*
<div id="parent">
    <div id="child1">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an H1 tag</h2>
    </div>


    <div id="child2">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an H1 tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi Im H1 tag of child 1"),
    React.createElement("h2", {}, "Hi Im H2 tag of child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi Im H1 tag of child 2"),
    React.createElement("h2", {}, "Hi Im H2 tag of child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
