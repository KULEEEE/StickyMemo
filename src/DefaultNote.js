import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export function DefaultNote({ addNote }) {
  return (
    <div className="default-note">
      <ButtonToolbar>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('todo')}}>Make Todo</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('plain')}}>Make Plain</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('vocab')}}>Make Vocab</Button>
      </ButtonToolbar>
    </div>
  );
}
