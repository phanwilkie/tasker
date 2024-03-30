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
    const taskListDiv = document.querySelector('#tasklist');
    const taskList = loadTasks(projectName).tasks;
    const taskCount = loadTasks(projectName).taskCount;

    for (let i = 0; i < taskCount; i++) {
        //render taskDiv under the parent of TaskListDiv
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (taskList[i].isImportant) {
            taskDiv.className += ' important';
        }
        taskListDiv.appendChild(taskDiv);

            //render desc div
            const taskDescDiv = document.createElement('div');
            taskDescDiv.className = 'task-desc-div';
            taskDiv.appendChild(taskDescDiv);
        
                //Add task desc checklist
                const taskDescInput = document.createElement('input');
                taskDescInput.type = 'checkbox';
                taskDescInput.id = 'task'+i;
                taskDescInput.name = 'task'+i;
                taskDescDiv.appendChild(taskDescInput);
                
                //Add task desc label
                const taskDescLabel = document.createElement('label');
                taskDescLabel.textContent = taskList[i].description;
                taskDescLabel.for = 'task'+i;
                taskDescDiv.appendChild(taskDescLabel);

            //Render due date div
            const taskDueDivTarget = document.createElement('div');
            taskDueDivTarget.className = 'task-due-div';
            taskDueDivTarget.textContent = taskList[i].dueDate;
            taskDiv.appendChild(taskDueDivTarget);

            //Render More Options div
            const taskOptionDivTarget = document.createElement('div');
            taskOptionDivTarget.className = 'task-option-div';
            taskDiv.appendChild(taskOptionDivTarget);

                const taskOptionButton = document.createElement('button');
                taskOptionButton.textContent = '...';
                taskOptionButton.class = 'btn-option';
                taskOptionButton.id = 'btn-option-'+i;
                taskOptionDivTarget.appendChild(taskOptionButton);
    }   
}

function init() {
    renderProjectNav();
    renderBodyTasks(getProjects().defaultProject);

    //todo highlight project that's being loaded
}


init();
