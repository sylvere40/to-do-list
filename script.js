document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-add-task')?.addEventListener('click', function() {
      window.location.href = 'add-task.html';
    });
  
    document.getElementById('go-view-tasks')?.addEventListener('click', function() {
      window.location.href = 'view-tasks.html';
    });
  
    document.getElementById('go-delete-tasks')?.addEventListener('click', function() {
      window.location.href = 'delete-tasks.html';
    });
  });
  