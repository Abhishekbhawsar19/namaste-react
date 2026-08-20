const heading = React.createElement("h1", {
    id: "heading"
}, "Hello from React");
// heading is react element  when you console it, its object
// {} where you give attributes  {id: 'heading'}
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            key: 1
        }, "Iam h1 tag"),
        React.createElement("h2", {
            key: 2
        }, "Iam h2 tag")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            key: 1
        }, "Iam h1 tag"),
        React.createElement("h2", {
            key: 2
        }, "Iam h2 tag")
    ])
]);
// Jsx
root.render(parent);

//# sourceMappingURL=Namaste React.6bd02f5a.js.map
