/* eslint-env browser */

const DEFAULT_TASK_TEXT = "New Task";

class Task {

    constructor(description = DEFAULT_TASK_TEXT, id = Date.now().toString(), completed = false) {
        this.description = description;
        this.id = id;
        this.completed = completed;
    }

    setDescription(description) {
        this.description = description;
    }

    setClosed() {
        this.completed = true;
    }

    setOpen() {
        this.completed = false;
    }

    toggleStatus() {
        this.completed = !this.completed;
        return this.completed;
    }

    static fromJSONObject(json) {
        return Task(json.description, json.id, json.completed);
    }

}

export default Task;