import React from 'react';

export function DefaultNote({ addNote }) {
  return (
    <div className="single-note">
      {/* ERROR */}
      {/* <button className="add-button" onClick={addNote('todo')}>Make Todo</button>
      <button className="add-button" onClick={addNote('plain')}>Make Plain</button> */}
      {/* CORRECT */}
      <button className="add-button" onClick={()=>{addNote('todo')}}>Make Todo</button>
      <button className="add-button" onClick={()=>{addNote('plain')}}>Make Plain</button>
    </div>
  );
}

