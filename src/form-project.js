import Project from './project.js';
import pubsub from './pubsub.js';
import getProjects from './localstorage.js';

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
    const btnDeleteProject = document.querySelector('#btn-delete-project');
    const modalTitle = document.querySelector('#modal-project-title');

    return {
        projectForm,
        projectNameInput,
        btnSaveProject,
        btnDeleteProject,
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
        if (isProjectNameUnique(newName)) { // Check for uniqueness
            addNewProject(newName);
            projectForm.removeEventListener('submit', handleFormSubmit); // Remove event listener
        } else {
            alert('Project name must be unique.');
        }
    }

    projectForm.addEventListener('submit', handleFormSubmit); // Add event listener
}
export function renderEditProjectForm(project) {
    const { projectForm, projectNameInput, btnSaveProject, btnDeleteProject, modalTitle } = setupModalElements();

    modalTitle.textContent = 'Update project';
    projectNameInput.value = project.name;
    btnSaveProject.textContent = 'Update';

    function handleFormSubmit(event) {
        event.preventDefault();
        const newName = projectNameInput.value.trim();
        if (isProjectNameUnique(newName) || newName.toLowerCase() === project.name.toLowerCase()) { // Check for uniqueness
            updateProject(project, newName);
            projectForm.removeEventListener('submit', handleFormSubmit); // Remove event listener
        } else {
            alert('Project name must be unique.');
        }
    }

    function handleDeleteClick(event) { // Delete project handler
        event.preventDefault();
        deleteProject(project);
        btnDeleteProject.removeEventListener('click', handleDeleteClick); // Remove event listener
    }

    projectForm.addEventListener('submit', handleFormSubmit); // Add event listener
    btnDeleteProject.addEventListener('click', handleDeleteClick); // Add event listener
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
        closeProjectModal();
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

function deleteProject(project) {
    const projectName = project.name;
    pubsub.publish('projectDeleted', projectName);
    closeProjectModal();
}

function isProjectNameUnique(projectName) {
    const { projectList } = getProjects();
    return !projectList.some(project => project.name.toLowerCase() === projectName.toLowerCase());
}
