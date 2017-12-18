"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const registerServiceWorker_1 = require("./registerServiceWorker");
require("./index.css");
require("./App.css");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map