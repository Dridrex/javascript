console.log("JavaScript carregado com sucesso!");


function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText ===''){
        alert('Por favor,digite uma nova tarefa.');
        return;
    }
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const  actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'concluir';
    completeBtn.onclick = () =>{
        li.classList.toggle('completed');
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'excluir';
    deleteBtn.onclick = () =>{
        taskList.removeChild(li);
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    taskList.appendChild(li);
    taskInput.value='';
}