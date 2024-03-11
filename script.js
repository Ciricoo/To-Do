const inputElement = document.querySelector("new-task-input");
const addTaskbutton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () =>{
    const inputIsValid = validateInput();

    console.log(inputIsValid)

    if(!inputIsValid){
        return inputElement.classList.add('error');
    }
};

const handleInputChange = () =>{
    const inputIsValid = validateInput();

    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
}
addTaskbutton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange())


