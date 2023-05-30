// Chapter -02 Igniting our App

/**
 *
 * **Parcel Featutes**
 
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our COde
 * Dev And Production builds
 * Fast Build Alogorithm
 * Caching while Devlopment
 * Tree Shaking
 * Zero Config
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Nested Heading1");
const heading2 = React.createElement("h1", { id: "titles" }, "Nested Heading2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
