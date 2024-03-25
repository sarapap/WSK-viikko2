// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];


function makeList() {
  const ulElement = document.querySelector('ul');

  todoList.forEach(todo => {
    const liElement = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;

    const label = document.createElement('label');
    label.textContent = todo.task;
    label.htmlFor = `todo-${todo.id}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    liElement.appendChild(checkbox);
    liElement.appendChild(label);
    liElement.appendChild(deleteButton);
    ulElement.appendChild(liElement);

    checkbox.addEventListener('change', function () {
      const todoIndex = todoList.findIndex(item => item.id === todo.id);
      todoList[todoIndex].completed = this.checked;
      console.log('Updated array:', JSON.stringify(todoList));
    });

    deleteButton.addEventListener('click', function () {
      const todoIndex = todoList.findIndex(item => item.id === todo.id);
      todoList.splice(todoIndex, 1);

      ulElement.removeChild(liElement);
      console.log('Updated array:', JSON.stringify(todoList));
    });

    const dialog = document.querySelector('dialog');
    const form = dialog.querySelector('form');

    function showModal() {
      dialog.showModal();
    }

    function closeModal() {
      dialog.close();
    }

    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', showModal);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const inputField = form.querySelector('input[type="text"]');
      const newItemName = inputField.value.trim();

      if (newItemName !== '') {
        const newItem = {
          id: todoList.length + 1,
          task: newItemName,
          completed: false,
        };

        todoList.push(newItem);
        console.log('Updated array:', JSON.stringify(todoList));

        inputField.value = '';
        closeModal();

        const newLi = document.createElement('li');
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.id = `todo-${newItem.id}`;

        const newLabel = document.createElement('label');
        newLabel.textContent = newItem.task;
        newLabel.htmlFor = `todo-${newItem.id}`;

        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = 'Delete';

        newLi.appendChild(newCheckbox);
        newLi.appendChild(newLabel);
        newLi.appendChild(newDeleteButton);
        ulElement.appendChild(newLi);

        newDeleteButton.addEventListener('click', function () {
          const todoIndex = todoList.findIndex(item => item.id === newItem.id);
          todoList.splice(todoIndex, 1);
          ulElement.removeChild(newLi);
          console.log('Updated array:', JSON.stringify(todoList));
        });

        newCheckbox.addEventListener('change', function () {
          newItem.completed = this.checked;
          console.log('Updated array:', JSON.stringify(todoList));
        });
      }
    });
  });
}

makeList();


