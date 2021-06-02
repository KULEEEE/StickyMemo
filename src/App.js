import logo from './logo.svg';
import './App.css';
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { TodoNote } from './TodoNote';
import { PlainNote } from './PlainNote';
import { AppUtils } from './AppUtils';
import { DefaultNote } from './DefaultNote';


function App() {   
  const{pinned,
        generals,
        addTodo,
        addPlain,
        deleteNote,
        moveSection} = AppUtils();
        
  return (
    <section className="App">
      <header className="App-header"> 
        <div>Project Name</div>
      </header>

      <section className="pinned-zone">
        <header>Pinned zone</header>
        {pinned.map(pin => (
          pin.notetype=='todo'? 
          <TodoNote key = {pin.id} note_id = {pin.id} section = 'pinned' deleteNote={deleteNote} moveSection={moveSection}/> : 
          <PlainNote key = {pin.id} note_id = {pin.id} section = 'pinned' deleteNote={deleteNote} moveSection={moveSection}/>)
          )
        }
      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addPlain={addPlain} addTodo={addTodo} />
        {generals.map(general => (
          general.notetype=='todo'? 
            <TodoNote key = {general.id} note_id = {general.id} section = 'generals' deleteNote={deleteNote} moveSection={moveSection}/> :
            <PlainNote key = {general.id} note_id = {general.id} section = 'generals' deleteNote={deleteNote} moveSection={moveSection}/>)
          )
        }
      </section>
      
    </section>
  );
}
export default App;
