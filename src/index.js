import './style.css';

const toDoContainer = document.getElementById('container');
const newTask = document.getElementById('new-to-do');
let arr = [];

const Activities = [
  {
    description: 'Clean the house',
    completed: true,
    index: 0,
  },

  {
    description: 'Go to school',
    completed: false,
    index: 1,
  },

  {
    description: 'Watch tv or Play video game',
    completed: true,
    index: 3,
  },

  {
    description: 'Go swimming',
    completed: false,
    index: 4,
  },

  {
    description: 'Visit my grand Mother',
    completed: false,
    index: 5,
  },

  {
    description: 'Read a novel',
    completed: false,
    index: 6,
  },
];

const appendToParent = (elem) => {
  toDoContainer.innerHTML += `<div class="activity-container">
    <input type="checkbox">
    <li class ="item">${arr[arr.indexOf(elem)].description}</li>
    <i class="fa-solid fa-ellipsis-vertical delete"></i>
    </div>`;
};

const show = () => {
  arr = JSON.parse(localStorage.getItem('todaysActivities'));
  arr.forEach((toDo) => {
    appendToParent(toDo);
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((e, index) => {
      e.addEventListener('click', () => {
        remove(index);
      });
    });
  });
};

show();