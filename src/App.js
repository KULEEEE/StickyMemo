import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { mockComponent } from 'react-dom/test-utils';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { DefaultNote } from './DefaultNote';

// This TodoNote is mockup, which is jsut same as plain text
function TodoNote() {
  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin'><img src='' alt='pinIcon' /></button>
        <button className='lang'><img src='' alt='langIcon' /></button>
      </div>
      <div className="plaintext">
        <form>
          <input className="content" type="text" placeholder="This is plain text note..."></input>
        </form>
      </div>
      <div className="destroy">
        <button className="destroy"><img src='' alt='destroyIcon' /></button>
      </div>
    </div>
  );
}

function PlainNote() {
  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin'><img src='' alt='pinIcon' /></button>
        <button className='lang'><img src='' alt='langIcon' /></button>
      </div>
      <div className="plaintext">
        <form>
          <input className="content" type="text" placeholder="This is plain text note..."></input>
        </form>
      </div>
      <div className="destroy">
        <button className="destroy"><img src='' alt='destroyIcon' /></button>
      </div>
    </div>
  );
}

function App() {    
  const [pinned, setPinned] = useState([]);
  const [general, setGeneral] = useState([]);

  function addNote(ntype){
    const single_note = {
      id: uuid(),
      notetype: ntype
    }
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
        {pinned.map(pin => (
          pin.notetype=='todo'? 
          <TodoNote /> : 
          <PlainNote />)
          )
        }
      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addNote={addNote}/>
        {general.map(singlenote => (
          singlenote.notetype=='todo'? 
            <TodoNote /> :
            <PlainNote />)
          )
        }
      </section>
      
    </section>
  );
}
export default App;
