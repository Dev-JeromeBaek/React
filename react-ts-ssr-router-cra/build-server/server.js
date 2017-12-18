"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const react_router_1 = require("react-router");
const App_1 = require("./App");
const app = express();
const server = http.createServer(app);
const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico',
    '/logo.svg'
];
staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        console.log(filePath);
        res.sendFile(filePath);
    });
});
app.get('*', (req, res) => {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();
    const context = {};
    const ReactApp = ReactDOMServer.renderToString(React.createElement(react_router_1.StaticRouter, { location: req.url, context: context }, React.createElement(App_1.default)));
    if (context.url) {
        res.redirect(301, '/');
    }
    else {
        const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
        res.status(200).send(renderedHtml);
    }
});
server.listen(3000);
//# sourceMappingURL=server.js.map