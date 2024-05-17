//TODO PREVENT DUPLICATE PROJECT NAME

import Project from './project.js';
import pubsub from './pubsub.js';

export function showNewProjectForm() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', () => renderNewProjectForm('create'));
}

function closeProjectModal() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'none';

    const projectNameInput = document.querySelector('#project-name');
    projectNameInput.value = '';
};

function setupModalElements() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';

    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
    
    const projectForm = document.querySelector('#form-add-project');    
    const projectNameInput = document.querySelector('#project-name');
    const btnSaveProject = document.querySelector('#btn-save-project');
    const modalTitle = document.querySelector('#modal-project-title');

    return {
        projectForm,
        projectNameInput,
        btnSaveProject,
        modalTitle
    };
}

export function renderNewProjectForm() {

    const { projectForm, projectNameInput, btnSaveProject, modalTitle } = setupModalElements();

    modalTitle.textContent = 'Add new project';
    projectNameInput.value = '';
    btnSaveProject.textContent = 'Save';

    function handleFormSubmit(event) {
        event.preventDefault();
        const newName = projectNameInput.value.trim();
        addNewProject(newName);

        // Remove event listener after form submission
        projectForm.removeEventListener('submit', handleFormSubmit);
    }

    projectForm.addEventListener('submit', handleFormSubmit);

}

export function renderEditProjectForm(project) {
    const { projectForm, projectNameInput, btnSaveProject, modalTitle } = setupModalElements();


    modalTitle.textContent = 'Update project';
    projectNameInput.value = project.name;
    btnSaveProject.textContent = 'Update';

    function handleFormSubmit(event) {
        event.preventDefault();
        const newName = projectNameInput.value.trim();
        updateProject(project, newName);

        // Remove event listener after form submission
        projectForm.removeEventListener('submit', handleFormSubmit);
    }
    projectForm.addEventListener('submit', handleFormSubmit);
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

function updateProject(project, newName) {
    const oldName = project.name;
    const updatedProject = new Project(
        newName, 
        project.title, 
        project.default, 
        project.isActive, 
        project.task
    );

    pubsub.publish('projectUpdated', { oldName, updatedProject });
    closeProjectModal();
}