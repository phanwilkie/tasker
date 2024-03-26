
// export default function loadProjects() {

// }


export function storeProject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

export default function loadProjects() {
    let projectList = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // const value = localStorage.getItem(key);
        projectList.push(key);
    }
    return projectList;
}
