import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export function DefaultNote({ addNote }) {
  return (
    <div className="default-note">
      <ButtonToolbar>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('plain')}}>PLAIN NOTE</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('todo')}}>TODO NOTE</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('vocab')}}>VOCAB NOTE</Button>
        <Button variant="btn btn-outline-secondary" className="add-button" onClick={()=>{addNote('expense')}}>EXPENSE NOTE</Button>
      </ButtonToolbar>
    </div>
  );
}
