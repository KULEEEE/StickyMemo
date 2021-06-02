import React from 'react';

export function DefaultNote({ addTodo, addPlain }) {
  return (
    <div className="single-note">
      <button onClick={addTodo}>Make Todo</button>
      <button onClick={addPlain}>Make Plain</button>
    </div>
  );
}
