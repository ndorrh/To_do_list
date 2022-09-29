import {
  toDoContainer,
} from './variable.js';

import {
  show,
} from './functions.js';

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
  const retriveTask = JSON.parse(localStorage.getItem('todaysActivities'));
  retriveTask.forEach((e, val) => {
    if (retriveTask[retriveTask.indexOf(e)].completed === true) {
      retriveTask.splice(val, 1);
      console.log(e);
    }
    retriveTask.forEach((element, val) => {
      retriveTask[retriveTask.indexOf(element)].index = val + 1;
    });
    localStorage.setItem('todaysActivities', JSON.stringify(retriveTask));
    toDoContainer.innerHTML = '';
    show();
  });
});
