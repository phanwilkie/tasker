import { addNewProject } from './form-project';
import pubsub from './pubsub.js';

// pubsub.subscribe('projectAdded', storeProject);
pubsub.subscribe('projectAdded', (project) => {
    const key = generateGUID();
    storeProject(key, project);
  });

pubsub.subscribe('projectUpdated', ({ oldName, updatedProject }) => {
    updateProject(oldName, updatedProject);
});

export function generateGUID() {
    const now = new Date();
    const randomPart = Math.floor(Math.random() * 10000);
    const guid = `${now.getUTCMilliseconds()}${now.getUTCMonth()}${now.getUTCFullYear()}${randomPart}`;
    return guid;
  }

export function storeProject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function updateProject(oldName, updatedProject) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const project = JSON.parse(localStorage.getItem(key));

        if (project.name === oldName) {
            localStorage.setItem(key, JSON.stringify(updatedProject));
            break;
        }
    }
}

pubsub.subscribe('projectDeleted', (projectName) => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedProject = JSON.parse(localStorage.getItem(key));
        if (storedProject.name === projectName) {
            localStorage.removeItem(key);
            break;
        }
    }
});

export default function getProjects() {
    let projectList = [];
    let defaultProject = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const stringObj = localStorage.getItem(key);
        const parsedObj = JSON.parse(stringObj);
        projectList.push(parsedObj);
        
        if (parsedObj.default) {
            defaultProject = key;
        }
    }
    return { projectList
            ,defaultProject 
    };
}

export function loadTasks(projectName) {
    
    const stringObj = localStorage.getItem(projectName);
    const parsedObj = JSON.parse(stringObj);
    const tasks = parsedObj.task;
    const taskCount = Object.keys(parsedObj.task).length;

    return { tasks, taskCount };
}