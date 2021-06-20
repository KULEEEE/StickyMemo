import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function TodoUtils() {
  const [todos, setTodos] = useState([]);

    function addTodo (task) {
        const todo = {
            id: uuid(),
            task
        };
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        console.log(newTodos);
    };


    function deleteTodo (id) {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return {
        todos, setTodos,
        addTodo,
        deleteTodo
    };
}
