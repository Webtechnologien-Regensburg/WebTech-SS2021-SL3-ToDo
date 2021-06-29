/* eslint-env node */

import express from "express";

var app;

function start(port) {
    initDatabase();
    initServer(port);
}

function initDatabase() {

}

function initServer(port) {
    app = express();
    app.use(express.static("app"));
    app.listen(port);
}

start(8080);