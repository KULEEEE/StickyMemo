import logo from './logo.svg';
import './App.css';
import React from 'react';
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
    moveSection} = AppUtils();

  return (
    <section className="App">
      <header className="App-header"> 
        <div>Project Name</div>
      </header>

      <section className="pinned-zone">
        <header>Pinned zone</header>
        {pinned.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='pinned' notetype={singlenote.notetype} destroyNote={destroyNote} moveSection={moveSection}/>))}
      </section>

      <section className="general-zone">
        <header>General zone</header>
        <DefaultNote addNote={addNote}/>
        {general.map(singlenote => (<SingleNote key = {singlenote.id} id = {singlenote.id} section='general' notetype={singlenote.notetype} destroyNote={destroyNote} moveSection={moveSection}/>))}
      </section>
    </section>
  );
}
export default App;