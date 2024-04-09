import { compareAsc, format } from "date-fns";
import Task from "./task";
import getProjects, { loadTasks, storeProject } from './localstorage.js';

export default class Project {
    
    constructor(name, title, defaultProject, isActive, taskData) {
        this.name = name;
        this.title = title;
        this.default = defaultProject;
        this.isActive = isActive;
        this.task =  taskData.map(taskData => new Task(
            taskData.title, 
            taskData.description, 
            taskData.dueDate, 
            taskData.isCompleted, 
            taskData.isImportant
            ));
        };
        
    static getDefaultProject(projects) {
        return projects.filter(project => project.default);    
    };
    
    // _init() {
    //     this._cacheDom();
    //     this._bindProjectEvents();
    //     this._renderProjects();
    // }

    // _cacheDom() {
    //     this.projectElement = document.createElement('div');
    //     this.projectElement.classList.add('project');
    // }
    
    _bindProjectEvents() {
        
    };
    
    _renderProjects() {
        const projectNav = document.createElement('div');
        projectNav.textContent = this.name;
        projectNav.className = 'nav-item';
        //FIND DEFAULT PROJECT 
        
        const nav = document.querySelector('#nav');
        nav.appendChild(projectNav);
    };

    addProject() {};

    renameProject() {};

    archiveProject() {};

    changeDefaultProject() {};
}