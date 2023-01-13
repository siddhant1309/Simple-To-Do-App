const form =document.querySelector('#add-todo-form');
const input =document.querySelector('#new-todo-text');
const list =document.querySelector('#todo-list');

let todos = [];

function updateList() {
    list.innerHTML = '';
    for (let todo of todos) {
        const item =document.createElement('li'); 
        item.innerHTML = `
        <span class="todo-text"> ${todo.text}</span> 
        <button class="complete-button">Complete</button> 
        <button class="delete-button">Delete</button>
        `;
        if (todo.completed) item.classList.add("completed");
        list.appendChild(item);
    }
}


function addTodo(text) { 
    const newTodo ={ 
        text,
        completed: false
    };
    todos.push(newTodo);
    updateList();
}

form.addEventListener('submit', event => { 
    event.preventDefault();
    const text = input.value; 
    if (text) {
    
    addTodo(text); 
    input.value=" ";
    }
});
    
list.addEventListener('click', event => {
    if (event.target.classList.contains('complete-button')) 
    {
        const index =Array.from(list.children).indexOf(event.target 
        .parentNode);
        todos[index].completed=todos[index].completed;
        updateList();
    }
    else if (event.target.classList.contains("delete-button")) 
    {
        const index =Array.from(list.children).indexOf (event.target 
        .parentNode); 
        todos.splice(index, 1);
        updateList();
    }
});