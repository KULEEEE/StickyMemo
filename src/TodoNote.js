import React, { useState } from 'react';
import { TodoUtils } from './TodoUtils';

export function TodoNote({note_id, section, deleteNote, moveSection}) {
  // const [section, setSection] = useState('generals');

  const { todos,
    addTodo,
    deleteTodo,
    toggleTodo
  } = TodoUtils();

  // const toggleSection = () =>{
  //   moveSection(section, note_id)
  //   section==='generals'? setSection('pinned'): setSection('generals');
  // }

  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin' onClick={()=>{
            moveSection(section, note_id);
            // toggleSection();
            }
          }>
          <img src='' alt='pinIcon'/></button>
        <button className='lang'><img src='' alt='langIcon'/></button>
      </div>
      <TodoHeader addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
      <div className="deleteTodo">
        <button className="todo-delete" onClick={() => deleteNote(section, note_id)}><img src='' alt='destroyIcon'/></button>
      </div>
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
    <header className='header'>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={value}
        onChange={handleOnChange}
        onKeyUp={submitTodo}
        autoFocus />
    </header>
  );
}

function TodoList({ todos = [], toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo} />))}
    </ul>
  );
}

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, task, completed } = todo;
  return (
    <li className={todo.completed}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)} />
        <label class="todo-label">{todo.task}</label>
        <button
          className='todo-delete'
          onClick={() => deleteTodo(id)} />
      </div>
    </li>
  );
}
