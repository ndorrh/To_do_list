import './style.css';

import {
  toDoContainer, newTask,
} from './modules/variable.js';

import {
  storeToLocalStorage, show,
} from './modules/functions.js';

if (!localStorage.getItem('todaysActivities')) {
  newTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && newTask.value !== '') {
      storeToLocalStorage(newTask);
      newTask.value = '';
      toDoContainer.innerHTML = '';

      show();
    }
  });
} else {
  show();
}

newTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && newTask.value !== '') {
    storeToLocalStorage(newTask);
    newTask.value = '';
    toDoContainer.innerHTML = '';

    show();
  }
});
