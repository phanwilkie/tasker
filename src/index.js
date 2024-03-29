import './style.css';
import { compareAsc, format } from "date-fns";

import Project from './project.js';
import getProjects, { loadTasks, storeProject } from './localstorage.js';

let project1 = new Project('project1','Default', true, true, [
    {
        title: 'Task 1',
        description: 'This is my first task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 2',
        description: 'This is my second task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 3',
        description: 'This is my third task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 2',
        description: 'This is my fourth task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    }]
);

let project2 = new Project('project2', 'House Chores', false, true, [
    {
        title: 'Task 1',
        description: 'This is my first task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 2',
        description: 'This is my second task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 3',
        description: 'This is my third task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 4',
        description: 'This is my fourth task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    }]
);

localStorage.clear();
storeProject('project1', project1);
storeProject('project2', project2);


function renderProjectNav() {
    const nav = document.querySelector('#nav');
    for (let i = 0; i < getProjects().projectList.length; i++) {
        const projectNav = document.createElement('div');
        projectNav.textContent = getProjects().projectList[i];
        projectNav.className = 'nav-item';
        nav.appendChild(projectNav);
    }
    return getProjects().defaultProject;
};

function renderBodyTasks(projectName) {
    // key = 'project1';
    const taskDiv = document.querySelector('#tasklist');
    const taskList = loadTasks(projectName).tasks;
    const taskCount = loadTasks(projectName).taskCount;

    //clear parent DOM

    // console.log(loadTasks(projectName));
    for (let i = 0; i < taskCount; i++) {
        //todo create grid to render all task properties
        const task = document.createElement('div');
        task.textContent = taskList[i].description;
        task.className = 'task-item';
        taskDiv.appendChild(task);
    }
    
}

function init() {
    renderProjectNav();
    renderBodyTasks(getProjects().defaultProject);

    //todo highlight project that's being loaded
}


init();
