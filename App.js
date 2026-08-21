import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Fixed line!

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React",
);
// heading is react element  when you console it, its object
// {} where you give attributes  {id: 'heading'}
const root = createRoot(document.getElementById("root"));
{
  /* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
ReactElement(Object) ==> Html (Browser Understands)
 */
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement("h1", { key: 1 }, "Iam h1 tag"),
    React.createElement("h2", { key: 2 }, "Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child", key: 2 }, [
    React.createElement("h1", { key: 1 }, "Iam h1 tag"),
    React.createElement("h2", { key: 2 }, "Iam h2 tag"),
  ]),
]);

// Jsx

root.render(parent);
