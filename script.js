let index = 0
function addTask() {
    let input = document.querySelector("#new-task-input");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let div = document.createElement("div");
        let container = document.querySelector("#tasks-container");
        my_element = `
        <div id="container-${index}" class="itens">
        
            <div id=text-${index}>${taskText}</div>
            
            <div style="display:flex; justify-content: space-between"> 
                <div onclick=concluir(${index})><i class="bi bi-check-all"></i></div>
                <div onclick=excluir(${index})><i class="bi bi-trash-fill"></i></div>
                <div onclick=editar(${index})><i class="bi bi-pencil-square"></i></div>
            </div>
        </div>

        
        `
        div.innerHTML = my_element
        container.appendChild(div)
        input.value = ''
        index++
    }

}

function excluir(index) {
    let container = document.querySelector(`#container-${index}`)
    container.style = 'display: none'
}
function editar(index) {
    let input = document.querySelector("#new-task-input");
    let text = document.querySelector(`#text-${index}`)
    console.log(text)

    var newText = prompt("Editar tarefa:", input.value);
    if (newText == null) {
        input.value = newText;
    }
    text.innerHTML = newText;
}

function concluir(index) {
    let container = document.querySelector(`#text-${index}`)
    if (container.className == 'completed') {
        container.className = ''
    } else {
        container.className = 'completed'
    }
}