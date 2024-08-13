document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText) {
        // Récupère les tâches existantes depuis le stockage local ou crée un tableau vide si aucune tâche n'existe
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Ajoute la nouvelle tâche au tableau
        tasks.push(taskText);
        // Sauvegarde le tableau mis à jour dans le stockage local
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // Réinitialise le champ de saisie
        taskInput.value = '';
        taskInput.focus();
        // Redirige vers la page de visualisation des tâches
        window.location.href = 'view-tasks.html';
      }
    });
  
    document.getElementById('back').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  