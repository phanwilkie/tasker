//TODO make it possible to specify default project
//TODO however, need if a default project is changed
//TODO then need to go thru all objects and mark other prj to false

import Project from './project.js';
import pubsub from './pubsub.js';


export function showNewProjectForm(projectName = '') {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', () => {
        renderProjectForm('create', projectName);
    })
}

function closeProjectModal() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'none';
};

export function renderProjectForm(mode = 'create', projectName = '') {
    //RENDER MODAL
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';
    
    //CLOSE MODAL INTERACTION
    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
    
    const projectForm = document.querySelector('#form-add-project');
    projectForm.setAttribute('data-mode', mode);
    
    const projectNameInput = document.querySelector('#project-name');
    projectNameInput.value = projectName;
    
    const btnSaveProject = document.querySelector('#btn-save-project');
    const modalTitle = document.querySelector('#modal-project-title');
    btnSaveProject.textContent = mode === 'create' ? 'Save' : 'Save Changes';
    modalTitle.textContent = mode === 'create' ? 'Add new project' : 'Modify project';
    
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission based on mode
        if (mode === 'create') {
            addNewProject(projectNameInput.value.trim());
        } 
        else {
            updateProject(projectNameInput.value.trim());
        }
    });
}

function addNewProject(projectName) {
    if (projectName !== '') {
        const newProject = new Project(
            projectName, 
            projectName, 
            false, //DEFAULT STATUS
            true,
            []
        );
        pubsub.publish('projectAdded', newProject);
        closeProjectModal()
    }
}

function updateProject(projectName) {
    // renderProjectForm(projectName ? 'edit' : 'create', projectName);
    //use class constructor if new
    //save this to local storage
    pubsub.publish('projectChanged', updatedProject);
}
