
export function storeProject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

export default function getProjects() {
    let projectList = [];
    let defaultProject = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const stringObj = localStorage.getItem(key);
        const parsedObj = JSON.parse(stringObj);
        projectList.push(key);
        
        if (parsedObj.default) {
            defaultProject = key;
        }
    }
    // console.log(projectList);
    return { projectList, defaultProject };
}

export function loadTasks(projectName) {
    
    const stringObj = localStorage.getItem(projectName);
    const parsedObj = JSON.parse(stringObj);
    const tasks = parsedObj.task;
    const taskCount = Object.keys(parsedObj.task).length;

    return { tasks, taskCount };
}