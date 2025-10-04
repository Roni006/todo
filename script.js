let todos = [];
const list = document.getElementById('list');

//! add todo form 
const editTodoForm = document.getElementById('edittodo')
const text = document.getElementById('input');
const btn = document.getElementById('btn');

//! edit todo form 
const addTodoForm = document.getElementById('addtodo')
const editText = document.getElementById("eidtInput")
const editBtn = document.getElementById("editBtn")

const cancelBtn = document.getElementById("cancelBtn")

let todoIndex = null;
const renderTodo = () => {
    list.innerHTML = "";

    if (todos.length === 0) {
        list.innerHTML =
            `<div class="text-center text-gray-400 text-6xl mb-4">📋</div>
            <p class="text-center text-gray-500 text-lg">No, tasks</p>
            <p class="text-center text-gray-400 text-md">Add a Todo to Strat</p>
        </div>                
        `;

        return;
    }


    todos.map((todo, index) => {
        let li = document.createElement('li');
        // let span = document.createElement('span');
        // let deletBtn = document.createElement('button');
        li.className =
            "flex items-center justify-between p-4 bg-gray-50 rounded lg border border-gray-200 hover:bg-gray-100 transition-all duration-200";


        li.innerHTML = `
        <div class="flex items-center flex-1">
        <span class="flex-1 text-gray-800 transition-all duration-200">
            ${todo.data}
        </span>
          </div>  
        <div class="flex gap-2 ml-4 ">
            <button onclick="startEdit(${index})" 
            class="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-md hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 cursor-pointer">
            Edit
            </button>

            <button onclick="deleteTodo(${index})"
            class="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all decoration-200 cursor-pointer"
            >Delete</button>
        </div>
        `;


        // span.innerText = todo.data;
        // span.className = "flex-1 text-gray-800 transition-all duration-200";
        // deletBtn.textContent = "Delete";

        // deletBtn.className = "x-3 px-1 text-sm bg-reg-100 text-red-600 rounded-md hover:bg-red-200 focus:outline-none focus:ring-red-500 transition-all  duration-200 cursor-pointer";

        // deletBtn.addEventListener("click", () => deleteTodo(index));

        // li.appendChild(span);
        // li.appendChild(deletBtn)
        list.appendChild(li)
    });

};



const addTodo = () => {
    if (text.value == "") {
        alert('Please, Write SomeThing First');
        return;
    }
    let data = text.value.trim();
    todos.push({ data, done: false });
    renderTodo();
    text.value = "";
};


btn.addEventListener('click', addTodo);
text.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});


const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodo();
};


const startEdit = (index) => {
    todoIndex = index

    addTodoForm.classList.add('hidden');
    editTodoForm.classList.remove('hidden');

    editText.value = todos[index].data
}

const edittodo = () => {
    let updateTodo = editText.value;
    todos[todoIndex].data = updateTodo;
    renderTodo();

    addTodoForm.classList.remove('hidden');
    editTodoForm.classList.add('hidden');

}

editBtn.addEventListener('click', edittodo);
cancelBtn.addEventListener("click", () => {
    addTodoForm.classList.remove('hidden');
    editTodoForm.classList.add('hidden');
})


renderTodo();


