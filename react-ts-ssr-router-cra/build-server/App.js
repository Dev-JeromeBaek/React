"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Home = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Home"),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hello" }, "Hello")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hi" }, "Hi"))));
};
const Hello = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Hello"),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hello" }, "Hello")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hi" }, "Hi"))));
};
class App extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home }),
            React.createElement(react_router_dom_1.Route, { path: "/hello", component: Hello }),
            React.createElement(react_router_dom_1.Redirect, { from: "*", to: "/" })));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map