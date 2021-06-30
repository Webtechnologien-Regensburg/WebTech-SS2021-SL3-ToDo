/* eslint-env browser */

import TaskView from "./TaskView.js";
import { Event, Observable } from "../utils/Observable.js";

var taskList,
    taskViews = [];


function addTask(task, context) {
    let view = new TaskView(task);
    taskViews.push(view);
    taskList.appendChild(view.getElement());
    view.addEventListener("taskViewStatusChange", onTaskViewUpdated.bind(context));
    view.addEventListener("taskViewTextChange", onTaskViewUpdated.bind(context));
    view.focus();
}

function onTaskViewUpdated(event) {
    let taskEvent = new Event("taskViewUpdate", event.data);
    this.notifyAll(taskEvent);
}

class TaskList extends Observable {

    constructor(taskListEl) {
        super();
        taskList = taskListEl;
    }

    add(task) {
        addTask(task, this);
    }

}

export default TaskList;