import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export function DefaultNote({ addTodo, addPlain, addNote }) {
  return (
    <div className="default-note">
      {/* ERROR */}
      {/* <button className="add-button" onClick={addNote('todo')}>Make Todo</button>
      <button className="add-button" onClick={addNote('plain')}>Make Plain</button> */}
      {/* CORRECT */}
      {/* <button className="add-button" onClick={()=>{addNote('todo')}}>Make Todo</button>
      <button className="add-button" onClick={()=>{addNote('plain')}}>Make Plain</button> */}
      <ButtonToolbar>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('todo')}}>Make Todo</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('plain')}}>Make Plain</Button>
      </ButtonToolbar>
    </div>
  );
}
