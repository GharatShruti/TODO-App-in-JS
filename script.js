const taskInput = document.querySelector(".task-input input");
taskBox = document.querySelector(".task-box");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if (todos) {
        todos.forEach((todo, id) => {
            // console.log(id, todo);
            let isCompleted = todo.status == "Completed" ? "checked" : "";
            li += `<li class="task">
                    <label for="${id}">
                        <input onClick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <i class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li><i class=" uil uil-pen">Edit</i></li>
                            <li><i class=" uil uil-trash">Delete</i></li>
                        </ul>
                    </div>
                </li>`;
        });
    }
    taskBox.innerHTML = li;
}

showTodo();

function updateStatus(selectedTask) {
    // console.log(selectedTask)
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    }else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener("keyup", e=> {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        // console.log(userTask)
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask,status: "pending"};
        todos.push(taskInfo); 
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});