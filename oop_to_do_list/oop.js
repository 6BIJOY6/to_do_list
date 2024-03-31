class TodoList {
    constructor(inputSelector, btnSelector, listSelector) {
        this.input = document.querySelector(inputSelector);
        this.btn = document.querySelector(btnSelector);
        this.list = document.querySelector(listSelector);
        this.todos = [];
        this.initializeTodos();
        this.btn.addEventListener("click", this.addTodo.bind(this));
        this.list.addEventListener("click", this.removeTodo.bind(this));
    }

    initializeTodos() {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            this.todos = JSON.parse(storedTodos);
            this.renderTodos();
        }
    }

    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    renderTodos() {
        this.list.innerHTML = "";
        this.todos.forEach(todo => {
            const task = document.createElement("li");
            task.innerText = todo.title;
            this.list.appendChild(task);
            const span = document.createElement("span");
            span.innerHTML = "\u00d7";
            task.appendChild(span);
        });
    }

    addTodo() {
        const values = this.input.value;
        if (values.length === 0) {
            alert("Please enter at least one letter");
            return;
        }
        const todo = { title: values };
        this.todos.push(todo);
        this.saveToLocalStorage();
        this.renderTodos();
        console.log(this.todos);
        this.input.value = "";
    }

    removeTodo(e) {
        if (e.target.tagName === "SPAN") {
            const li = e.target.parentElement;
            const index = Array.from(li.parentNode.children).indexOf(li);
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
            li.remove();
            
        }
        if(e.target.tagName =="LI")
        {
        e.target.classList.toggle("checked")
        }
    }
}

// Usage
const todoList = new TodoList(".task_input", ".btn", ".task_list");
