document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    });
  
    document.getElementById('back').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  