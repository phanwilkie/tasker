import { compareAsc, format } from "date-fns";
import Task from "./task";
import {showNewProjectForm, renderNewProjectForm, renderEditProjectForm, showEditProjectForm} from "./form-project.js"
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

    static subscribeToProjectChanges() {
        pubsub.subscribe('projectAdded', Project.handleProjectAdded);
        pubsub.subscribe('projectUpdated', Project.handleProjectUpdated);
        pubsub.subscribe('projectDeleted', Project.handleProjectDeleted);
    }

    static handleProjectAdded(project) {
        project._renderProjects();
    }

    static handleProjectUpdated({ oldName, updatedProject }) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(navItem => {
            const navName = navItem.querySelector('.nav-name');
            if (navName.textContent === oldName) {
                navName.textContent = updatedProject.name;
            }
        });
    }

    static handleProjectDeleted(projectName) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(navItem => {
            if (navItem.getAttribute('data-project-name') === projectName) {
                navItem.remove();
            }
        });
    }
    
    _bindProjectEvents() {
        //new project button
        const btnNewProject = document.querySelector('#btn-new-project');
        btnNewProject.addEventListener('click', renderNewProjectForm);
        
        //edit interaction for each project in the nav
    };
    
    _renderProjects() {
        const nav = document.querySelector('#nav');
        const navDiv = document.createElement('div');
        navDiv.className = 'nav-item';
        navDiv.setAttribute('data-project-name', this.name);
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
                btnProjectOption.addEventListener('click', () => {
                    renderEditProjectForm(this);
                })
                projectOptionDiv.appendChild(btnProjectOption);
    };

    archiveProject() {};

    changeDefaultProject() {};
}