console.log("JavaScript carregado com sucesso!");

let deletedItems = [];

function updateRemovedTasks() {
    const removedList = document.getElementById('removedTasks');
    removedList.innerHTML = '';

    deletedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        removedList.appendChild(li);
    });
}

function showRemovedTasks() {
    updateRemovedTasks();
    document.getElementById('removedTasksContainer').style.display = 'block';
}

function hideRemovedTasks() {
    document.getElementById('removedTasksContainer').style.display = 'none';
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma nova tarefa.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluir';
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.onclick = () => {
        deletedItems.push(taskText);
        taskList.removeChild(li);
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    taskList.appendChild(li);
    taskInput.value = '';
}
