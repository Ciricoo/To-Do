// let index = 0;

// window.onload = function() {
//     let savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//         savedTasks.forEach(task => {
//             addTask(task);
//         });
//     }
// }

// function addTask(taskText = null) {
//     let input = document.querySelector("#new-task-input");
//     if (!taskText) {
//         taskText = input.value.trim();
//     }

//     if (taskText !== "") {
//         let div = document.createElement("div");
//         let container = document.querySelector("#tasks-container");
//         my_element = `
//         <div id="container-${index}" class="itens" draggable="true" ondragstart="dragStart(event)" ondrop="drop(event)" ondragover="allowDrop(event)">
//             <div style="display: flex; justify-content: center; align-items: center; font-size: 20px; margin-bottom: -15px; cursor: grab;" id="text-${index}">${taskText}</div>
//             <div style="display:flex; justify-content: space-between; gap: 8px; padding-bottom: 5px; padding-top:10px"> 
//                 <div class="button-itens">
//                     <div onclick="concluir(${index})"><i class="bi bi-check-all"></i></div>
//                 </div>
//                 <div class="button-itens vermelho">
//                     <div onclick="excluir(${index})"><i class="bi bi-trash-fill"></i></div>
//                 </div>
//                 <div class="button-itens azul">
//                     <div onclick="editar(${index})"><i class="bi bi-pencil-square"></i></div>
//                 </div>
//             </div>
//         </div>
//         <hr id="hr-${index}">
//         `;
//         div.innerHTML = my_element;
//         container.appendChild(div);
//         input.value = '';
        
//         saveTasksToLocalStorage();
        
//         index++;
//     }
// }

// function saveTasksToLocalStorage() {
    
//     let tasks = [];
//     let containers = document.querySelectorAll(".itens");
//     containers.forEach(container => {
//         let textId = container.id.replace("container-", "text-");
//         let textElement = document.getElementById(textId);
        
//         tasks.push(textElement.textContent);
//     });
//     console.log(tasks)
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function excluir(index) {
//     let container = document.querySelector(`#container-${index}`);
//     let hr = document.querySelector(`#hr-${index}`);
//     container.remove();
//     hr.remove();
    
//     saveTasksToLocalStorage();
// }

// function editar(index) {
//     let text = document.querySelector(`#text-${index}`);
//     var newText = prompt("Editar tarefa:", text.textContent);
//     if (newText !== null && newText.trim() !== "") { 
//         text.textContent = newText.trim();
        
//         saveTasksToLocalStorage();
//     }
// }


// function concluir(index) {
//     let container = document.querySelector(`#text-${index}`);
 
//     container.classList.toggle('completed');
//     saveTasksToLocalStorage();
    
// }


let index = 0;

window.onload = function() {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach(task => {
            addTask(task.text, task.completed);
        });
    }
}

function addTask(taskText = null, completed = false) {
    let input = document.querySelector("#new-task-input");
    if (!taskText) {
        taskText = input.value.trim();
    }

    if (taskText !== "") {
        let div = document.createElement("div");
        let container = document.querySelector("#tasks-container");
        let completedClass = completed ? 'completed' : '';
        my_element = `
        <div id="container-${index}" class="itens" draggable="true" ondragstart="dragStart(event)" ondrop="drop(event)" ondragover="allowDrop(event)">
            <div class="${completedClass}" style="display: flex; justify-content: center; align-items: center; font-size: 20px; margin-bottom: -15px; cursor: grab;" id="text-${index}">${taskText}</div>
            <div style="display:flex; justify-content: space-between; gap: 8px; padding-bottom: 5px; padding-top:10px"> 
                <div class="button-itens">
                    <div onclick="concluir(${index})"><i class="bi bi-check-all"></i></div>
                </div>
                <div class="button-itens vermelho">
                    <div onclick="excluir(${index})"><i class="bi bi-trash-fill"></i></div>
                </div>
                <div class="button-itens azul">
                    <div onclick="editar(${index})"><i class="bi bi-pencil-square"></i></div>
                </div>
            </div>
        </div>
        <hr id="hr-${index}">
        `;
        div.innerHTML = my_element;
        container.appendChild(div);
        input.value = '';
        
        saveTasksToLocalStorage();
        
        index++;
    }
}

function saveTasksToLocalStorage() {
    let tasks = [];
    let containers = document.querySelectorAll(".itens");
    containers.forEach(container => {
        let textId = container.id.replace("container-", "text-");
        let textElement = document.getElementById(textId);
        let completed = container.classList.contains('completed');
        tasks.push({ text: textElement.textContent, completed: completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function excluir(index) {
    let container = document.querySelector(`#container-${index}`);
    let hr = document.querySelector(`#hr-${index}`);
    container.remove();
    hr.remove();
    
    saveTasksToLocalStorage();
}

function editar(index) {
    let text = document.querySelector(`#text-${index}`);
    var newText = prompt("Editar tarefa:", text.textContent);
    if (newText !== null && newText.trim() !== "") { 
        text.textContent = newText.trim();
        
        saveTasksToLocalStorage();
    }
}

function concluir(index) {
    let container = document.querySelector(`#container-${index}`);
    container.classList.toggle('completed');
    saveTasksToLocalStorage();
}

// ... Seu código existente ...

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropzone = event.target.closest('.itens');
    if (dropzone) {
        dropzone.parentNode.insertBefore(draggedElement, dropzone.nextSibling);
        saveTasksToLocalStorage();
    }
}


