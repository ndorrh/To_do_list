/* eslint-disable no-use-before-define */
import {
  toDoContainer, newTask,
} from './variable.js';

let arr = [];

const appendToParent = (elem) => {
  toDoContainer.innerHTML += `<div class="activity-container">
    <input type="checkbox" class="checkBox">
    <input type="text" id="edit-to-do" readonly class ="item" value ='${arr[arr.indexOf(elem)].description}' >
    <i class="fa-solid fa-ellipsis-vertical drag"></i>
    <i class="fa-regular fa-trash-can hidden delete"></i>
    </div>`;
};

const add = (input) => {
  arr.push({
    description: input.value,
    completed: false,
    index: arr.length + 1,
  });
};

const storeToLocalStorage = (input) => {
  if (localStorage.getItem('todaysActivities')) {
    arr = JSON.parse(localStorage.getItem('todaysActivities'));
    add(input);
    localStorage.setItem('todaysActivities', JSON.stringify(arr));
  } else {
    add(input);
    localStorage.setItem('todaysActivities', JSON.stringify(arr));
  }
};

const edit = (del, drag, edit) => {
  edit.forEach((task, index) => {
    task.addEventListener('focusin', () => {
      task.parentNode.style.backgroundColor = 'yellow';
      task.style.backgroundColor = 'yellow';
    }, true);
    task.addEventListener('click', () => {
      task.removeAttribute('readonly');
      drag[index].classList.add('hidden');
      del[index].classList.remove('hidden');
      task.value = arr[index].description;

      task.addEventListener('change', () => {
        drag[index].classList.add('hidden');
        del[index].classList.remove('hidden');
        arr[index].description = task.value;
        localStorage.setItem('todaysActivities', JSON.stringify(arr));
        toDoContainer.innerHTML = '';
        show();
      });
    });
  });
};

const show = () => {
  arr = JSON.parse(localStorage.getItem('todaysActivities'));
  arr.forEach((toDo) => {
    appendToParent(toDo);
    const deleteBtn = document.querySelectorAll('.delete');
    const editBtn = document.querySelectorAll('.item');
    const dragBtn = document.querySelectorAll('.drag');
    edit(deleteBtn, dragBtn, editBtn);

    deleteBtn.forEach((e, index) => {
      e.addEventListener('click', () => {
        remove(index);
      });
    });
  });
};

const remove = (taskToRemove) => {
  const retrive = JSON.parse(localStorage.getItem('todaysActivities'));
  retrive.splice(taskToRemove, 1);
  retrive.forEach((element, val) => {
    retrive[val].index = val + 1;
  });
  localStorage.setItem('todaysActivities', JSON.stringify(retrive));
  toDoContainer.innerHTML = '';
  show();
};

const storeAndSetaddArea = () => {
  storeToLocalStorage(newTask);
  newTask.value = '';
  toDoContainer.innerHTML = '';
};

export {
  appendToParent, add, storeToLocalStorage, edit, show, remove, storeAndSetaddArea,
};