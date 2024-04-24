//TODO make it possible to specify default project
//TODO however, need if a default project is changed
//TODO then need to go thru all objects and mark other prj to false

import Project from './project.js';
import pubsub from './pubsub.js';


export function showNewProjectForm() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', addNewProject);
}

export function addNewProject() {
    renderProjectForm();
    
    const fieldProject = document.querySelector('#project-name');
    const btnSaveProject = document.querySelector('#btn-save-project');
    btnSaveProject.addEventListener('click', (event) => {
        event.preventDefault();
        if (fieldProject.value.trim() !== '') {
            const newProject = new Project(
                fieldProject.value.trim(), 
                fieldProject.value.trim(), 
                false, //DEFAULT STATUS
                true,
                []
            );
            fieldProject.value = '';
            // newProject._renderProjects();
            pubsub.publish('projectAdded', newProject);
            //TODO save to local or emit it to pubsub
            // pubsub.publish('newProject', newProject);

            closeProjectModal();
        }
    })


}
//edit project



function closeProjectModal() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'none';
};

export function renderProjectForm() {
    //TODO figure out how to make this function load existing using argument

    //RENDER MODAL
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';
    
    //CLOSE MODAL INTERACTION
    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");

    
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
}


export function updateProject() {
    //use class constructor if new
    //save this to local storage

}



//notify pubsub