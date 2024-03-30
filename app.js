const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo-input');
const todoItems = [];

function addTodo(text) {
  const todo = {
    id: Date.now(),
    text,
    completed: false
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function deleteTodo(id) {
  const index = todoItems.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todoItems.splice(index, 1);
    renderTodoList();
  }
}

function toggleTodoCompleted(id) {
  const todo = todoItems.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodo(todo);
  }
}

function renderTodo(todo) {
  const listItem = document.createElement('li');
  listItem.id = todo.id;
  listItem.className = todo.completed ? 'completed' : '';
  listItem.innerText = todo.text;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => deleteTodo(todo.id));

  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'Toggle Completed';
  toggleButton.addEventListener('click', () => toggleTodoCompleted(todo.id));

  listItem.appendChild(deleteButton);
  listItem.appendChild(toggleButton);

  todoList.appendChild(listItem);
}

function renderTodoList() {
  todoList.innerHTML = '';
  todoItems.forEach(todo => renderTodo(todo));
}

addTodo('Buy groceries');
addTodo('Walk the dog');
addTodo('Clean the kitchen');

addTodo('Write a new article');
addTodo('Review the latest code changes');

document.getElementById('add-todo-form').addEventListener('submit', e => {
  e.preventDefault();
  const text = newTodoInput.value.trim();
  if (text) {
    addTodo(text);
    newTodoInput.value = '';
  }
});