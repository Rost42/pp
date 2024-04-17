const keyStorege = 'key_task';
let myTasklist = [
];

let storegeData = localStorage.getItem(keyStorege);
if(storegeData != null) {
    myTasklist = JSON.parse(localStorage.getItem(keyStorege));
    myTasklist = JSON.parse(storegeData)
    maxNumberIdTask = myTasklist 
    .map(x => x.id)
.reduce((a,b) => Math.max(a,b), -Infinity) ;
myTasklist.forEach(t => renderTask(t))

}
/*
myTasklist = JSON.parse(localStorage.getItem(keyStorege));

let maxNumberIdTask = myTasklist
.map(x => x.id)
.reduce((a,b) => Math.max(a,b), -Infinity) ;

if(myTasklist.length > 0){
    myTasklist.forEach(t => renderTask(t))

}
*/
document.getElementById('add-btn').onclick = AddNewTask;

document.getElementById('tsk-lst').onclick = marKDone;

document.addEventListener('keydown', check);

document.getElementById('tsk-lst').onmouseover = showActions;
document.getElementById('tsk-lst').onmouseout = hideActions;

function showActions(ev) {
    const btn = document.createElement('button')
    btn.innerText = 'Удалить';
    ev.target.append(btn);
}
function hideActions(ev) {
    const btn = ev.target.getElementById('button');
    btn.parentNode.removeChild(btn);
}
function markDone(elem) {
    let labelElem = document.querySelector(`[for='${elem.id}'`)
    if(elem.checked) {
        labelElem.style.textDecoration = 'line-through';
    } else{
        labelElem.style.textDecoration = 'none'  ;
    }
}

function check(ev) {
    if (ev.key === 'Enter') {
        AddNewTask();
    }
}

function AddNewTask() {
    const taskNameElem = document.getElementById('tsk-imp');
    const taskName = taskNameElem.value.trim();
    if (taskName) {
        maxNumberIdTask ++;

        let newTask = {
id: maxNumberIdTask,
title: taskName,
        }
        myTasklist.push(newTask);
        renderTask(newTask);
        localStorage.setItem(keyStorege, JSON.stringify(myTasklist));
    }
    else {
        alert('ААА')
    }
}

function renderTask(task) {

    const listElem = document.getElementById('tsk-lst');

    const newTaskElem = document.createElement('li');
    newTaskElem.innerHTML = ` 
    <div class="item-task">
        <input class="checkbox-to" id="checkbox-task-${task.id}" name="checkbox-task-${task.id}" type="checkbox"
        onchange="markDone(this)" > 
        <label for="checkbox-task-${task.id}">
        ${task.title}                
        </label>
    </div>`;
    listElem.prepend(newTaskElem)
    //alert(task.name)
    taskNameElem.value == "";
}