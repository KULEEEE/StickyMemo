import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function TodoUtils() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const todo = {
      id: uuid(),
      task,
      completed: false
    };

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id)
        return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo
  };

}
