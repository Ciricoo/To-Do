let index = 0
function addTask() {
    let input = document.querySelector("#new-task-input");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let div = document.createElement("div");
        let container = document.querySelector("#tasks-container");
        my_element = `
        <div id="container-${index}" class="itens">
        
            <div style="display: flex; justify-content: center; align-items: center; font-size: 20px; margin-bottom: -15px"  id=text-${index}>${taskText}</div>
            
            
            <div style="display:flex; justify-content: space-between; gap: 8px; padding-bottom: 5px; padding-top:10px"> 
                <div class="button-itens">
                <div onclick=concluir(${index})><i class="bi bi-check-all"></i></div>
                </div>
                <div class="button-itens vermelho">
                <div onclick=excluir(${index})><i class="bi bi-trash-fill"></i></div>
                </div>
                <div class="button-itens azul">
                <div onclick=editar(${index})><i class="bi bi-pencil-square"></i></div>
                </div>
            </div>

            
        </div>
        <hr id="hr-${index}">
        
        `
        div.innerHTML = my_element
        container.appendChild(div)
        input.value = ''
        index++
    }

}

function excluir(index) {
    let container = document.querySelector(`#container-${index}`)
    let hr = document.querySelector(`#hr-${index}`);
    container.style = 'display: none';
    hr.remove();
}
function editar(index) {
    let text = document.querySelector(`#text-${index}`)

    var newText = prompt("Editar tarefa:", text.textContent);
    if (newText !== null && newText.trim() !== "") { 
        text.textContent = newText.trim(); 
    }
}

function concluir(index) {
    let container = document.querySelector(`#text-${index}`)
    if (container.className == 'completed') {
        container.className = ''
    } else {
        container.className = 'completed'
    }
}