"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const request = require("superagent");
class App extends React.Component {
    static getInitialState() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('https://api.github.com/users');
            // error 처리를 해서 props 를 넘길수도 있다.
            console.log(res);
            return res.body[0].login;
        });
    }
    componentWillMount() {
        console.log('App componentWillMount');
        console.log(this.props.user);
        if (this.props.user) {
            this.setState({ user: this.props.user });
        }
    }
    componentDidMount() {
        console.log('App componentDidMount');
        if (!this.props.user) {
            App.getInitialState().then(user => {
                this.setState({ user: user });
            });
        }
    }
    componentWillUnmount() {
        console.log('App componentWillUnmount');
    }
    render() {
        console.log('App render');
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "App-header" },
                React.createElement("img", { src: "logo.svg", className: "App-logo", alt: "logo" }),
                React.createElement("h2", null, "Welcome to React")),
            React.createElement("p", { className: "App-intro" }, this.state.user)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map