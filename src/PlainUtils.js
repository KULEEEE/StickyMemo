import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function PlainUtils() {
  const [plains, setPlains] = useState([]);

  const addPlain = (task) => {
    const plain = {
      id: uuid(),
      task,
      completed: false
    };
    const newPlains = [plain];
    setPlains(newPlains);
  };

  const togglePlain = (id) => {
    const newPlains = plains.map(plain => {
      if (plain.id === id)
        return { ...plain, completed: !plain.completed };
      return plain;
    });
    setPlains(newPlains);
  };

  const deletePlain = (id) => {
    const newPlains = plains.filter(plain => plain.id !== id);
    setPlains(newPlains);
  };

  return {
    plains,
    addPlain,
    deletePlain,
    togglePlain
  };

}
