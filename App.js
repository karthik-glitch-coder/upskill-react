import React from "react";
import ReactDOM from "react-dom/client";

//React Componet
const Title = () => (
  <div>
    <h1>This is Title Component🗣️</h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>This is Heading Componet🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
