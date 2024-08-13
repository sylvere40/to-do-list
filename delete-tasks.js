document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Fonction pour afficher les tâches
    function displayTasks() {
      taskList.innerHTML = ''; // Réinitialise la liste
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.dataset.index = index; // Stocke l'index de la tâche pour suppression
  
        const label = document.createElement('label');
        label.textContent = task;
        label.className = 'task-label';
  
        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
      });
    }
  
    // Affiche les tâches au chargement de la page
    displayTasks();
  
    // Gère la suppression des tâches sélectionnées
    document.getElementById('delete-task').addEventListener('click', function() {
      const selectedCheckboxes = document.querySelectorAll('.task-checkbox:checked');
      selectedCheckboxes.forEach(checkbox => {
        const taskIndex = checkbox.dataset.index;
        tasks.splice(taskIndex, 1); // Supprime la tâche du tableau
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks(); // Réaffiche la liste mise à jour
    });
  
    // Gère le retour à la page d'accueil
    document.getElementById('back').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  