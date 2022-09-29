const toDoContainer = document.getElementById('container');
const newTask = document.getElementById('new-to-do');
const deleteBtn = document.querySelectorAll('.delete');
const editBtn = document.querySelectorAll('.item');
const dragBtn = document.querySelectorAll('.drag');
const newTaskBtn = document.getElementById('addBtn');
const refreshBtn = document.getElementById('refresh');
const completedTaskBtn = document.querySelectorAll('.checkBox');

export {
  toDoContainer, newTask, deleteBtn, editBtn, dragBtn, newTaskBtn, refreshBtn, completedTaskBtn,
};