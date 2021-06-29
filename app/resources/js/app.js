/*eslint-env browser */

import Task from "./task/Task.js";
import TaskList from "./task/TaskList.js";

var taskList;

function init() {
    initUI();
}

function initUI() {
    let createTaskButton = document.querySelector(".button.new-task"),
        clearListButton = document.querySelector(".button.clear-list"),
        taskListEl = document.querySelector(".task-list");
    createTaskButton.addEventListener("click", onNewTaskButtonClicked);
    clearListButton.addEventListener("click", onClearListButtonClicked);
    taskList = new TaskList(taskListEl);
    taskList.addEventListener("taskViewUpdate", onTaskChangedByUser);

}

function onNewTaskButtonClicked() {
    taskList.add(new Task());
}

function onClearListButtonClicked() {
    taskList.clear();

}

function onTaskChangedByUser(event) {
    console.log("[Task] Task changed (" + event.data.description + ")");
}

init();