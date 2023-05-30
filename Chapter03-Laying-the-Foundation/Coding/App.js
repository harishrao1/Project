// Laying the Foundation

import React from "react";
import ReactDOM from "react-dom/client";
import { React, createElement as ce } from "react";
import { Header, NavBar } from "./Assignment";
// const heading1 = ce("h1", { className: "title" }, "Heading1");
// const heading2 = ce("h1", { className: "title" }, "Heading2");
// const container = ce("div", { className: "header", key: "header" }, [
//   heading1,
//   heading2,
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// Create Header element using JSX

// JSX => React.createElement => Object => HTML(DOM) babel do all the conversion)

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

/**
 *
 * React Component
 *
 * Functional -> new Way of Writing Component
 *
 * Class Component -> old Way of Writing components
 */
const Title = () => {
  return (
    <h1 id="title" key="title">
      Functional Component
    </h1>
  );
};

const HeaderComponent = () => {
  return (
    <div>
      <NavBar />
      <Title />
      <h1>Nameste React Functional component</h1>
      <h2>Heading 2</h2>
      <p>Assignment</p>
      <hr />
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
