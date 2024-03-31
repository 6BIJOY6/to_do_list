let input = document.querySelector(".task_input")
let btn = document.querySelector(".btn")
let list = document.querySelector(".task_list")
let todos= []
let storedTodos=localStorage.getItem("todos")

function savetolocalstore(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

if(storedTodos){
    todos=JSON.parse(storedTodos)
    todos.forEach(todo => {
        let task = document.createElement("li")
        task.innerText=todo.title;
        list.appendChild(task)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        task.appendChild(span)
    });
}

btn.addEventListener("click",(event) => {
    event.preventDefault()
    let values = input.value
    if(values.length === 0){
        alert("plz enter at least one letter")
    }
    else{
        let task = document.createElement("li")
        const todo={
            title:values
        }
        todos.push(todo)
        savetolocalstore()
        task.innerText=values;
        list.appendChild(task)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        task.appendChild(span)
        console.log(todos)
    }
    input.value=""
})
list.addEventListener("click",(e) => {
    if(e.target.tagName =="LI")
    {
        e.target.classList.toggle("checked")
    }
    if(e.target.tagName == "SPAN"){
        const li =e.target.parentElement;
        const index = Array.from(li.parentNode.children).indexOf(li); // Get the index of the clicked todo
        todos.splice(index, 1); 
        savetolocalstore()
        li.remove();

    }
    
})