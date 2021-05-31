import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { mockComponent } from 'react-dom/test-utils';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';


function DefaultNote({ addTodo, addPlain }) {
  return (
    <div className="single-note">
      <button className="add-button" onClick={addTodo}>Make Todo</button>
      <button className="add-button" onClick={addPlain}>Make Plain</button>
    </div>
  );
}

function App() {    
  const [pinned, setPinned] = useState([]);
  const [general, setGeneral] = useState([]);

  function addTodo() {
    const single_note = {
      id: uuid(),
      notetype: 'todo'
    };
    const newNotes = [...general, single_note];
    setGeneral(newNotes);
  }

  function addPlain() {
    const single_note = {
      id: uuid(),
      notetype: 'plain'
    };
    const newNotes = [...general, single_note];
    setGeneral(newNotes);
  }
  
  return (
    <section className="App">
      <header className="App-header"> 
        <div>Project Name</div>
      </header>

      <section className="pinned-zone">
        <header>Pinned zone</header>

      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addPlain={addPlain} addTodo={addTodo} />
      </section>
      
    </section>
  );
}
export default App;
