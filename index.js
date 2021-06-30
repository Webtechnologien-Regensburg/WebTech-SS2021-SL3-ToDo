/* eslint-env node */

import express from "express";
import Database from "./lib/Database.js";

const SERVER_PORT = 8080;

var app;

/**
 * Initialisiert die SQLite-Datenbank. Sobald diese korrekt geöffnet wurde, wird die nächste Funktion 
 * aufgerufen, die im Parameter onReady übergeben wird.
 */
function initDatabase(onReady) {
    Database.open(onReady);
}

/**
 * Initialisiert den Server: Der Inhalt des app-Ordners (der Client-Code der Anwendung) wird über eine 
 * statische Route des express-Servers ausgeliefert. Zustätlich werden weitere Routen zur HTTP-basierten
 * Kommunikation mit der Datenbank eingerichtet.
 */
function initServer() {
    app = express();
    app.use(express.json()); // Erlaubt das einfache übergeben JSON-formatierte Daten an den Server
    app.use(express.static("app"));
    app.get("/task", onTasksRequested); // Route für GET-Anfrage des Clients, um alle Task aus der Datenbank auszulesen
    app.put("/task", onTaskAdded); // Route für PUT-Anfrage des Clients, um einen neuen Task in der Datenbank zu speichern
    app.post("/task", onTaskUpdated); // Route für POST-Anfrage des Clients, um einen Task in der Datenbank zu aktualisieren
    app.listen(SERVER_PORT);
}

function onTasksRequested(request, response) {
    // TODO Alle Tasks aus der Datenbank auslesen und über response.json zurückschicken
}

function onTaskAdded(request, response) {
    let task = request.body; // Der Task, der vom Client an den Server übergeben wurde
    // TODO Task aus request in der Datenbank speichern und Anfrage über response.end beenden
}

function onTaskUpdated(request, response) {
    let task = request.body; // Der Task, der vom Client an den Server übergeben wurde
    // TODO Task aus request in der Datenbank aktualisieren und Anfrage über response.end beenden
}

// Start der Anwendung: Nach dem Initialisieren der Datenbank wird der (HTTP-) Server eingerichtet und gestartet
initDatabase(initServer);