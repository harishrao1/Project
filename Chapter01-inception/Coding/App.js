/**  Manipulating The Html Dom using Javscript Dom

const heading = document.createElement("h1");
heading.innerHTML = "Hello EveryOne";
const root = document.getElementById("root");
root.appendChild(heading);

*/

// Manipulating the HTML DOM using React

// creating react element and rendering in root
const heading = React.createElement("h1", { id: "sub-title" }, "Heading");
// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside root
root.render(heading);
const heading1 = React.createElement("h1", { id: "title" }, "Nested Heading1");
const heading2 = React.createElement("h1", { id: "titles" }, "Nested Heading2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

console.log(container);
const root_1 = ReactDOM.createRoot(document.getElementById("root_1"));

root_1.render(container);
