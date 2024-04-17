let maxNumberIdTask = 2;
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
        const listElem = document.getElementById('tsk-lst');

        const newTaskElem = document.createElement('li');
        newTaskElem.innerHTML = ` 
        <div class="item-task">
            <input class="checkbox-to" id="checkbox-task-${maxNumberIdTask}" name="checkbox-task-${maxNumberIdTask}" type="checkbox"
            onchange="markDone(this)" > 
            <label for="checkbox-task-${maxNumberIdTask}">
            ${taskName}                
            </label>
        </div>
    `;
        listElem.prepend(newTaskElem)
        alert(taskName)
        taskNameElem.value == "";
    }
    else {
        alert('ААА')
    }
}