import { compareAsc, format } from "date-fns";
import Task from "./task";
import {showNewProjectForm, renderProjectForm, showEditProjectForm} from "./form-project.js"
// import getProjects, { loadTasks, storeProject } from './localstorage.js';
import pubsub from './pubsub.js';

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

    static subscribeToProjectAdded() {
        pubsub.subscribe('projectAdded', Project.handleProjectAdded);
    }

    static handleProjectAdded(project) {
        project._renderProjects();
    }
    
    _bindProjectEvents() {
        //new project button
        const btnNewProject = document.querySelector('#btn-new-project');
        btnNewProject.addEventListener('click', renderProjectForm);
        
        //edit interaction for each project in the nav
    };
    
    _renderProjects() {
        const nav = document.querySelector('#nav');
        const navDiv = document.createElement('div');
        navDiv.className = 'nav-item';
        nav.appendChild(navDiv);

            const projectNameDiv = document.createElement('div');
            projectNameDiv.className = 'nav-name';
            projectNameDiv.textContent = this.name;
            navDiv.appendChild(projectNameDiv);

            const projectOptionDiv = document.createElement('div');
            projectOptionDiv.className = 'nav-option'
            navDiv.appendChild(projectOptionDiv);

                const btnProjectOption = document.createElement('button');
                btnProjectOption.textContent = '...';
                btnProjectOption.className = 'btn-project-edit';
                btnProjectOption.addEventListener('click', () => this.editProject());
                projectOptionDiv.appendChild(btnProjectOption);
    };

    editProject() {
        showEditProjectForm(this.name);
    };

    archiveProject() {};

    changeDefaultProject() {};
}