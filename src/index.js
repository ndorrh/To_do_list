import './style.css';

const toDoContainer = document.getElementById('container');

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

const show = (arr) => {
  arr.forEach((e) => {
    toDoContainer.innerHTML += `<div class="activity-container">
    <input type="checkbox" class="checkBox">
    <li class ="item" >${arr[arr.indexOf(e)].description}</li>
    <input type="text" id="edit-to-do" class ="hidden" >
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-regular fa-trash-can hidden"></i>
    
    </div>`;
  });
};

show(Activities);