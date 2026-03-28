const addTask = document.querySelector("#addTask");
const task = document.querySelector("#list-item");
const taskBody = document.querySelector("#taskBody");

var taskId = 0;

addTask.addEventListener('click', ()=>{
    var taskVal = task.value;
    alert(taskVal);
    var listee = document.createElement("li");
    var deleteee = document.createElement("button");
    deleteee.innerHTML = 'Delete Task';
    listee.setAttribute('id', taskId);
    deleteee.setAttribute('id', taskId);
    de = taskId.toString();
    bee = "#" + de;
    delont = document.querySelector(bee);
    delont.addEventListener('click', ()=>{
            taskBody.removeChild(delont);
    });
    taskId = taskId + 1;
    listee.innerHTML = taskVal;

    taskBody.appendChild(listee);
    taskBody.appendChild(deleteee);

    task.value = "";

});
