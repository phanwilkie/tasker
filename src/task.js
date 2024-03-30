import { compareAsc, format } from "date-fns";

export default class Task {
    constructor (title, description, dueDate, isCompleted, isImportant) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
        this.isImportant = isImportant;
    }

    //todo add some methods
}