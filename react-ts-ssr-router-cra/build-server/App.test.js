"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(React.createElement(App_1.default, null), div);
});
//# sourceMappingURL=App.test.js.map