import { compareAsc, format } from "date-fns";
import Task from "./task";
import loadProjects from "./localstorage";

export default class Project {
    constructor(name, title, defaultProject, isActive, taskData) {
        this.name = name;
        this.title = title;
        this.default = defaultProject;
        this.isActive = isActive;
        this.task =  taskData.map(taskData => new Task(
            taskData.name, 
            taskData.description, 
            taskData.dueDate, 
            taskData.isCompleted, 
            taskData.isImportant
        ));
    }
}

// function listProjects() {
//     loadProjects();
// }

// function saveProject() {

// }