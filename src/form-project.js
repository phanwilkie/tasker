export function addProject() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', renderProjectForm);

}

//edit project

export function renderProjectForm(key) {
    //TODO figure out how to make this function load existing using argument

    //RENDER MODAL
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';
    
    //SAVE NEW PROJECT INTERACTION
    
    
    
    //CLOSE MODAL INTERACTION
    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");

    function closeProjectModal() {
        newProjectModal.style.display = 'none';
    };

    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
}

export function saveProjectForm(key) {
    //use class constructor if new
    //save this to local storage

}


//notify pubsub