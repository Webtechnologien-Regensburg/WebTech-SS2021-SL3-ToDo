/*eslint-env browser */

import Task from "./task/Task.js";
import TaskList from "./task/TaskList.js";
import FetchHelper from "./http/FetchHelper.js"; // Hilfklassse für die HTTP-Anfrage (Beschreibung siehe Moduldatei)

const API_URL_TASKS = "/task"; // URL unseres Servers, für Zugriff auf die Task-Datenbank

var taskList;

function init() {
    initUI();
}

/**
 * Hier wird das UI mit der Liste der Aufgaben und der Schaltfläche für das Hinzufügen neuer Aufgaben initialisiert. An diesem
 * Teil der Aufgabe müssen Sie keine Änderungen vornehmen. 
 */
function initUI() {
    let createTaskButton = document.querySelector(".button.new-task"),
        taskListEl = document.querySelector(".task-list");
    createTaskButton.addEventListener("click", onNewTaskButtonClicked);
    taskList = new TaskList(taskListEl);
    taskList.addEventListener("taskViewUpdate", onTaskChangedByUser);
    loadDatabaseFromServer();
}

/**
 * Diese Methode wird aufgerufen, sobald das User Interface (siehe initUI) vollständig geladen ist
 */
function loadDatabaseFromServer() {
    // TODO Laden aller Task aus der Datenbank und übertragen jedes einzelne Task in das UI (via taskList.add(task))
}

/**
 * Diese Methode wird immer aufgerufen, wenn die Nutzer*innen auf den Button zum Hinzufügen eines neuen Tasks geklickt haben
 */
function onNewTaskButtonClicked() {
    let task = new Task(); // Der neue Task
    // Fügt den neuen (leeren) Task ins UI ein
    taskList.add(task);
    console.log("[Task] New task added by user");
    // TODO Speichern des neuen Tasks (task) in der Datenbank
}

/**
 * Diese Methode wird immer aufgerufen, wenn die Nutzer*innen die Beschreibung oder den Status eines Tasks im UI geändert haben
 */
function onTaskChangedByUser(event) {
    let task = event.data; // Der geänderte Task
    console.log("[Task] Task changed ");
    // TODO Aktualisieren des Tasks (task) in der Datenbank
}

init();