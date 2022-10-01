import {
  toDoContainer,
} from './variable.js';

import {
  show,
} from './functions.js';

const clearBtn = document.getElementById('clear');
const time = document.getElementById('time');
const moment = require('moment');

time.innerHTML = `${moment().format('MMMM Do YYYY, h: mm:ss a')}`;

clearBtn.addEventListener('click', () => {
  const retriveTask = JSON.parse(localStorage.getItem('todaysActivities'));
  const result = retriveTask.filter((val) => val.completed === false);

  result.forEach((element, val) => {
    result[result.indexOf(element)].index = val + 1;
  });
  localStorage.setItem('todaysActivities', JSON.stringify(result));
  toDoContainer.innerHTML = '';
  show();
});
