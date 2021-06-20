import React, { useState } from 'react';
import { TodoUtils } from './TodoUtils';
import {Getjson, Setjson} from './Makejson';

export function Todo({data}) {
    const { todos, 
            setTodos,
            addTodo,
            deleteTodo} = TodoUtils();
    return (
        <div className="content-todo">
            <TodoHeader addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} data={data} />
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
        placeholder='무엇을 해야하나요?'
        value={value}
        onChange={handleOnChange}
        onKeyUp={submitTodo}
        autoFocus />
    </header>
  );
}
function TodoList({ todos = [], deleteTodo, data }) {
  const todoarr = new Array();
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          todoarr = {todoarr}
          data = {data} />))}
    </ul>
  );
}
function TodoItem({ todo, deleteTodo, todoarr, data }) {
  const [status, setStatus] = useState('');
  const { id, task } = todo;
  const todoobj = new Object();

  todoobj.todoid = id;
  todoobj.value = task;
  todoobj.state = status === 'complete' ? 'complete' : 'incomplete';
  todoarr.push(todoobj);
  const uniquearr = todoarr.reduceRight((prev, now) => {
    if (!prev.some(obj => obj.todoid === now.todoid )) {
      prev.push(now);
    }
    return prev;
  }, []);
  const reverse = uniquearr.reverse();
  data.arr = reverse;
  Setjson(data);
  console.log(Getjson());
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
        onClick={() => deleteTodo(id)} />
    </li>
  );
}
/* JSON
arr{
  state
  todoid
  value
}
date
noteid
section
type
*/