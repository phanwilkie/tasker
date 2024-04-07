import { compareAsc, format } from "date-fns";

export default class Task {
    constructor (title, description, dueDate, isCompleted, isImportant) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
        this.isImportant = isImportant;
    }

    //todo add some methods
}



// function renderBodyTasks(projectName) {
//     const taskListDiv = document.querySelector('#tasklist');
//     const taskList = loadTasks(projectName).tasks;
//     const taskCount = loadTasks(projectName).taskCount;

//     for (let i = 0; i < taskCount; i++) {
//         //render taskDiv under the parent of TaskListDiv
//         const taskDiv = document.createElement('div');
//         taskDiv.className = 'task';
//         if (taskList[i].isImportant) {
//             taskDiv.className += ' important';
//         }
//         taskListDiv.appendChild(taskDiv);

//             //render desc div
//             const taskDescDiv = document.createElement('div');
//             taskDescDiv.className = 'task-desc-div';
//             taskDiv.appendChild(taskDescDiv);
        
//                 //Add task desc checklist
//                 const taskDescInput = document.createElement('input');
//                 taskDescInput.type = 'checkbox';
//                 taskDescInput.id = 'task'+i;
//                 taskDescInput.name = 'task'+i;
//                 taskDescDiv.appendChild(taskDescInput);
                
//                 //Add task desc label
//                 const taskDescLabel = document.createElement('label');
//                 taskDescLabel.textContent = taskList[i].description;
//                 taskDescLabel.for = 'task'+i;
//                 taskDescDiv.appendChild(taskDescLabel);

//             //Render due date div
//             const taskDueDivTarget = document.createElement('div');
//             taskDueDivTarget.className = 'task-due-div';
//             taskDueDivTarget.textContent = taskList[i].dueDate;
//             taskDiv.appendChild(taskDueDivTarget);

//             //Render More Options div
//             const taskOptionDivTarget = document.createElement('div');
//             taskOptionDivTarget.className = 'task-option-div';
//             taskDiv.appendChild(taskOptionDivTarget);

//                 const taskOptionButton = document.createElement('button');
//                 taskOptionButton.textContent = '...';
//                 taskOptionButton.class = 'btn-option';
//                 taskOptionButton.id = 'btn-option-'+i;
//                 taskOptionDivTarget.appendChild(taskOptionButton);
//     }   
// }

