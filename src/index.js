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
    //todo split out argument between first load vs manual selection
    const nav = document.querySelector('#nav');
    for (let i = 0; i < getProjects().projectList.length; i++) {
        const projectNav = document.createElement('div');
        projectNav.textContent = getProjects().projectList[i];
        projectNav.className = 'nav-item';
        nav.appendChild(projectNav);
        // console.log('dom text content ' +projectNav.textContent);
    }

    // console.log(getProjects().projectList);
    console.log('default project is ' + getProjects().defaultProject);
    //todo get project key of default project
    //find default
    
    
    // renderBodyTasks(key);
    //todo indicate which is the default project
};

// function renderBodyTasks(key) {
//     const taskList = document.querySelector('#tasklist');
//     loadTasks(key);
//     console.table(tasks);
    
// }

function init() {
    renderProjectNav();
    // renderBodyTasks(loadProjects.defau);
    //todo default to the default project

    //todo load all tasks associated with the selected project

    //todo highlight project that's being loaded
}


init();
