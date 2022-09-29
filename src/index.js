import './style.css';

import './modules/interactions.js';

import {
  newTask, newTaskBtn, refreshBtn, toDoContainer,
} from './modules/variable.js';

import {
  show, storeAndSetaddArea,
} from './modules/functions.js';

refreshBtn.addEventListener('click', () => {
  toDoContainer.innerHTML = '';
  show();
});

if (!localStorage.getItem('todaysActivities')) {
  newTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && newTask.value !== '') {
      storeAndSetaddArea();

      show();
    }
  });
} else {
  show();
}

newTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && newTask.value !== '') {
    storeAndSetaddArea();
    show();
  }
});

newTaskBtn.addEventListener('click', () => {
  if (newTask.value !== '') {
    storeAndSetaddArea();
    show();
  }
});
