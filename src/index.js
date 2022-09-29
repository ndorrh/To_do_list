import './style.css';

const toDoContainer = document.getElementById('container');
const newTask = document.getElementById('new-to-do');
let arr = [];


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
