import React from "react";
import ReactDOM from "react-dom/client";

// JSX transpiled by babel => React.createElement => React Element (JS object) => HTMLElement(rendered)

// React Element
const Title = () => <h1 className="lodu">This is title</h1>;

// React Functional Component
// Fn that returns a piece of JSX code/ React Element
const HeadingComponent = () => (
  <div id="container" className="lodu">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
