function addTask(input, list, todos) {
    
        let values = input.value;
        console.log(values)
        if (values.length === 0) {
            alert("Please enter at least one letter");
        } else {
            let task = document.createElement("li");
            const todo = { title: values };
            todos.push(todo);
            saveToLocalStore(todos);
            task.innerText = values;
            list.appendChild(task);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            task.appendChild(span);
            console.log(todos);
            span.addEventListener("click", removetask)
        }
        input.value = "";
    
}
function loadTasks(list, todos) {
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.title;
        list.appendChild(li);
    });
}

function saveToLocalStore(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

let input = document.querySelector(".task_input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".task_list");
let storedTodos = localStorage.getItem("todos");
let todos =  storedTodos?JSON.parse(storedTodos): [];
loadTasks(list, todos)


btn.addEventListener("click",() => addTask(input, list, todos));

