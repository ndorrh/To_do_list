import './style.css';
import './modules/functions.js';

if (!localStorage.getItem('todaysActivities')) {
  newTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      storeToLocalStorage(newTask);
      newTask.value = '';
      toDoContainer.innerHTML = '';

      show();
    }
  });
} else {
  show();
}
