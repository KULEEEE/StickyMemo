import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { mockComponent } from 'react-dom/test-utils';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { DefaultNote } from './DefaultNote';
import { AppUtils } from './AppUtils';
import { SingleNote } from './SingleNote';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {    
  const{
    pinned,
    general,
    addNote,
    destroyNote,
    moveSection,
    translatePlain} = AppUtils();

  return (
    <section className="App">
      <header className="App-header"> 
        <div>Project Name</div>
      </header>

      <section className="pinned-zone">
        <header>Pinned zone</header>
        {pinned.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='pinned' notetype={singlenote.notetype} destroyNote={destroyNote} moveSection={moveSection} translatePlain={translatePlain}/>))}
      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addNote={addNote}/>
        {general.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='general' notetype={singlenote.notetype} destroyNote={destroyNote} moveSection={moveSection} translatePlain={translatePlain}/>))}
      </section>
    </section>
  );
}
export default App;