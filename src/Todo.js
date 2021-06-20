import React, { useState } from 'react';
import { TodoUtils } from './TodoUtils';
import delete_icon from './delete-icon.png';

export function Todo() {
    const { todos, 
            setTodos,
            addTodo,
            deleteTodo} = TodoUtils();
    return (
        <div className="content-todo">
            <TodoHeader addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

function TodoHeader({ addTodo }) {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const submitTodo = (event) => {
    if (event.key !== 'Enter')
      return;
    addTodo(value);
    setValue('');
  };

  return (
    <header className='todo-header'>
      <input
        className='todo-adder'
        placeholder='Write your task here'
        value={value}
        onChange={handleOnChange}
        onKeyUp={submitTodo}
        autoFocus />
    </header>
  );
}
function TodoList({ todos = [], deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo} />))}
    </ul>
  );
}
function TodoItem({ todo, deleteTodo }) {
  const [status, setStatus] = useState('');
  const { id, task } = todo;

  function toggleStatus(status) {
    status === 'complete' ? setStatus('incomplete') : setStatus('complete');
  }

  return (
    <li className={todo.status}>
      <input
        className="complete-check"
        type="checkbox"
        checked={status === 'complete'}
        onChange={() => toggleStatus(status)} />
      <label class="todo-label">{todo.task}</label>
      <button
        className='todo-delete'
        onClick={() => deleteTodo(id)}>
          <img src={delete_icon} alt='delete' className='deleteIcon'/>
      </button>

    </li>
  );
}
