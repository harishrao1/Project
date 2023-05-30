/*
Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div )

const heading1 = React.createElement("h1", { key: "h1" }, "This is H1 Tag");
const heading2 = React.createElement("h2", { key: "h2" }, "This is H2 Tag");
const heading3 = React.createElement("h3", { key: "h3" }, "This is h3 Tag");

const header = React.createElement("div", { id: "title" }, [
  heading1,
  heading2,
  heading3,
]);

*/

/* Create the Same using JSX

const header = (
  <div className="Title" key="title">
    <h1>this is h1 Tag</h1>
    <h2>this is h1 Tag</h2>
    <h3>this is h1 Tag</h3>
  </div>
);

*/
/*

Create a functional component of the same with JSX and pass Attribute into the tag in JSX
*/
export const Header = () => {
  return (
    <div className="Title">
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 Tag
      </h1>
      <h2 style={{ color: "yelow" }} key="h1">
        This is h2 Tag
      </h2>
      <h3 style={{ color: "green" }} key="h1">
        This is h3 Tag
      </h3>
      <AnotherComponent />
    </div>
  );
};

// Composition of Component (Add a component inside another)

const AnotherComponent = function () {
  return <h3>This is Another Component</h3>;
};

/*
Q: Create a Header Component from scratch using Functional Component with JSX 
- Add a Logo on Left
- Add a seach bar in middle
- Add user icon on right
- Add CSS to make it look nice
*/

export const NavBar = () => {
  return (
    <div className="heading-wrapper">
      <div className="logo-wrapper">
        <img src="" alt="Logo" />
        <span className="logo-name">Learning React</span>
      </div>
      <div className="search">
        <input type="text" key="search" placeholder="Search" />
      </div>
      <div className="avatar">
        <div className="user-icon" key="user-icon"></div>
      </div>
    </div>
  );
};
