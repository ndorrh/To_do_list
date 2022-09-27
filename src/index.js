import './style.css';

const toDoContainer = document.getElementById('container');

const Activities = [
  {
    description: 'clean the house',
    completed: true,
    index: 0,
  },

  {
    description: 'go to school',
    completed: false,
    index: 1,
  },

  {
    description: 'Watch tv',
    completed: true,
    index: 3,
  },

  {
    description: 'Go swimming',
    completed: false,
    index: 4,
  },

  {
    description: 'Go swimming',
    completed: false,
    index: 5,
  },

  {
    description: 'Go swimming',
    completed: false,
    index: 6,
  },
];

const show = (arr) => {
  arr.forEach((e) => {
    toDoContainer.innerHTML += `<div class="activity-container"><input type="checkbox"><li class ="item">${arr[arr.indexOf(e)].description}</li><i class="fa-solid fa-ellipsis-vertical"></i></div>`;
  });
};

show(Activities);