export function addProject() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', renderProjectForm());

}

//edit project

export function renderProjectForm(key) {
    console.log('new project');
    //if key doesn't exist load empty form

    //else bring up existing

}

export function saveProjectForm(key) {
    //use class constructor if new
    //save this to local storage

}


//notify pubsub