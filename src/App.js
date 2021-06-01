import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { mockComponent } from 'react-dom/test-utils';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { DefaultNote } from './DefaultNote';

function SingleNote({id, section, notetype, deleteNote}){
  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin'><img src='' alt='pinIcon' /></button>
        <button className='lang'><img src='' alt='langIcon' /></button>
      </div>
      <NoteContent notetype={notetype}/>
      <div className="destroy">
        <button className="destroy"
                onClick={()=>deleteNote(section, id)}>
                  <img src='' alt='destroyIcon' />
        </button>
      </div>
    </div>
  );
}

function NoteContent({notetype}){
  const ntype = notetype;

  if (ntype==='todo'){ 
    return(
      <div className="content-todo">
        <form>
          <input className="content" type="text" placeholder="This is todo note..."></input>
        </form>
      </div>
    )}
  else{
    return(
      <div className="content-plain">
        <form>
          <input className="content" type="text" placeholder="This is plain text note..."></input>
        </form>
      </div>
      )
    }
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

  function deleteNote(section, id) {
    if (section == 'general') {
      const newNotes = general.filter(singlenote => singlenote.id !== id);
      setGeneral(newNotes);
    }
    else {
      const newNotes = pinned.filter(singlenote => singlenote.id !== id);
      setPinned(newNotes);
    }
  }

  return (
    <section className="App">
      <header className="App-header"> 
        <div>Project Name</div>
      </header>

      <section className="pinned-zone">
        <header>Pinned zone</header>
        {pinned.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='pinned' notetype={singlenote.notetype} deleteNote={deleteNote}/>))}
      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addNote={addNote}/>
        {general.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='general' notetype={singlenote.notetype} deleteNote={deleteNote}/>))}
      </section>
    </section>
  );
}
export default App;
