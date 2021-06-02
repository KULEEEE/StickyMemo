import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import pin from './pin.png';

export function SingleNote({ id, section, notetype, destroyNote, moveSection }) {
  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin'
                onClick= {()=>moveSection(section, id)}
                >
          <img src={pin} alt='pinIcon' className='pinIcon' />
        </button>
        <button className='lang'><img src='' alt='langIcon' /></button>
      </div>
      <NoteContent notetype={notetype} />
      <div className="destroy">
        <button type="button" class="btn btn-light btn-sm" 
          onClick={() => destroyNote(section, id)}>
          {/* <img src='' alt='destroyIcon' /> */}
          메모 삭제
        </button>
      </div>
    </div>
  );
}

function NoteContent({ notetype }) {
  const ntype = notetype;

  if (ntype === 'todo') {
    return (
      <div className="content-todo">
        <Todo />
      </div>
    );
  }
  else {
    return (
      <div className="content-plain">
        <form>
          <input className="plain-adder" type="text" placeholder="This is plain text note..."></input>
        </form>
      </div>
    );
  }
}


function Todo (){
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const todo = {
      id: uuid(),
      task
    };

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoHeader addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
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

function TodoList({ todos = [], deleteTodo}) {
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
  const {id, task} = todo;

  function toggleStatus(status){
    status==='complete'? setStatus('incomplete'): setStatus('complete');
  }

  return (
    <li className={todo.status}>
      <input
        className="complete-check"
        type="checkbox"
        checked={status==='complete'}
        onChange={()=>toggleStatus(status)}
      />
      <label>{todo.task}</label>
      <button
        className='task-destroy'
        onClick={() => deleteTodo(id)} />
    </li>
  );
}

