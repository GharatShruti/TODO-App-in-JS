const taskInput = document.querySelector(".task-input input");

taskInput.addEventListener("keyup", e=> {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        console.log(userTask)
        let todos = JSON.parse(localStorage.getItem("todo-list"));
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask,status: "pending"};
        todos.push(taskInfo); 
        localStorage.setItem("todo-list", JSON.stringify(todos));
    }
});