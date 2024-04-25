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

export function renderNewProjectForm() {
    //RENDER MODAL
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

    modalTitle.textContent = 'Add new project';
    projectNameInput.value = '';
    btnSaveProject.textContent = 'Save';

    // projectForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const newName = projectNameInput.value.trim();
    //     addNewProject(newName);
    // })

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
    console.log(project);

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

    // projectForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const newName = projectNameInput.value.trim();
    //     updateProject(project, newName);
    // })

    projectForm.addEventListener('submit', handleFormSubmit);

}

// export function renderProjectForm(mode = 'create', project = '') {
//     //RENDER MODAL
//     const newProjectModal = document.querySelector('#new-project-modal');
//     newProjectModal.style.display = 'block';
    
//     //CLOSE MODAL INTERACTION
//     const btnCloseProjectModal = document.querySelector('#close-modal-project');
//     const btnCancelProjectModal = document.querySelector("#btn-cancel-project");
//     btnCloseProjectModal.addEventListener('click', closeProjectModal);
//     btnCancelProjectModal.addEventListener('click', closeProjectModal);
    
//     const projectForm = document.querySelector('#form-add-project');
//     projectForm.setAttribute('data-mode', mode);
    
//     const projectNameInput = document.querySelector('#project-name');
//     projectNameInput.value = project.name;
    
//     const btnSaveProject = document.querySelector('#btn-save-project');
//     const modalTitle = document.querySelector('#modal-project-title');
//     if (mode === 'create') {
//         modalTitle.textContent = 'Add new project';
//         projectNameInput.value = '';
//         btnSaveProject.textContent = 'Save';
//     }
//     else if (mode === 'edit' && project) {
//         console.log('renderProjectForm / form-project.js / mode === edit' );
//         console.log(project);

//         modalTitle.textContent = 'Modify project';
//         projectNameInput.value = project.name;
//         btnSaveProject.textContent = 'Update';

//     }
    
//     projectForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const newName = projectNameInput.value.trim();
//         console.log('renderProjectForm / form-project.js / projectForm' );
//         console.log(project);

//         if (mode === 'create') {
//             addNewProject(newName);
//         } 
//         else if (mode === 'edit') {
//             updateProject(project, newName);
//         }
//     });

// }

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
    // console.log('updateProject / form-project.js - new name: ' + newName);
    // console.log(project);
    
    // console.log('updateProject / form-project.js - old name: ' + oldName);
    
    // project.name = newName;

    const updatedProject = new Project(
        newName, 
        project.title, 
        project.default, 
        project.isActive, 
        project.task
    );

    // console.log('updateProject / form-project.js - new name: ' + newName);
    // console.log('updateProject / form-project.js - object');
    // console.log(project);
    
    pubsub.publish('projectUpdated', { oldName, updatedProject });
    
    closeProjectModal();
}
