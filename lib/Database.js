/* eslint-env node */

import sqlite3 from "sqlite3";

const DB_PATH = "data/todo.db";

var db;

function openDatabase(path, callback) {
    db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, function(error) {
        if (error === null) {
            callback();
        } else {
            console.log("Error while opening SQL database from: " + path);
            console.log(error);
        }
    });
}

function runQuery(query, onResult) {
    db.all(query, function(error, rows) {
        if (error === null) {
            onResult(rows);
        } else {
            console.log("Error while executing SQL query: " + query);
            console.log(error);
        }
    });
}

class Database {

    open(callback) {
        openDatabase(DB_PATH, callback);
    }

    /**
     * Gibt alle gespeicherten Tasks aus der Datenbank zurück
     * 
     * Im Parameter callback wird eine Methode übergeben, die nach Abschluss der Datenbankanfrage automatisch aufgerufen wird. 
     * Die Methode erhält das Ergebnis der Anfrage (alle ausgelesenen Zeilen) als Array im ersten Parameter übergeben.
     */
    getAllTasks(callback) {
        // TODO Rufen Sie hier die Methode runQuery mit der korrekten SQL-Query auf, um alle Tasks aus der 
    }

    /**
     * Speichert den übergebenen Task in der Datenbank
     * 
     * Im Parameter task wird ein Javascript-Objekt mit den Eigenschaften id (String), description (String) und completed (String) übergeben, 
     * das in der Datenbank gespeichert werden soll. Im Parameter callback wird eine Methode übergeben, die nach Abschluss der Datenbankanfrage 
     * automatisch aufgerufen wird. 
     */
    addTask(task, callback) {
        // TODO Rufen Sie hier die Methode runQuery mit der korrekten SQL-Query auf, um den übergebenen Task in der Datenbank zu speichern
    }

    /**
     * Aktualisiert den übergebenen Task in der Datenbank
     * 
     * Im Parameter task wird ein Javascript-Objekt mit den Eigenschaften id (String), description (String) und completed (Boolean) übergeben, 
     * der bereits in der Datenbank gespeichert ist. Das passende Tupel kann über die id identifiziert werden. In der Datenbank sollen die Attribute
     * description und completed auf die jeweiligen Werten des übergebenen Objekts geändert werden. Im Parameter callback wird eine Methode übergeben,
     * die nach Abschluss der Datenbankanfrage automatisch aufgerufen wird. 
     */
    updateTask(task, callback) {
        // TODO Rufen Sie hier die Methode runQuery mit der korrekten SQL-Query auf, um den übergebenen Task in der Datenbank zu aktualisieren
    }

}

export default new Database();
