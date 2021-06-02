import React, { useState } from 'react';
import { TodoNote } from './TodoNote';
import { v4 as uuid } from 'uuid';

export function AppUtils() {
  const [pinned, setPinned] = useState([]);
  const [generals, setGenerals] = useState([]);

  function addTodo() {
    const note = {
      id: uuid(),
      notetype: 'todo'
    };
    const newNotes = [...generals, note];
    setGenerals(newNotes);
  }

  function addPlain() {
    const note = {
      id: uuid(),
      notetype: 'plain'
    };
    const newNotes = [...generals, note];
    setGenerals(newNotes);
  }

  function deleteNote(section, id) {
    if (section == 'generals') {
      const newNotes = generals.filter(note => note.id !== id);
      setGenerals(newNotes);
    }
    else {
      const newNotes = pinned.filter(note => note.id !== id);
      setPinned(newNotes);
    }
  }

  function moveSection(section, note_id){
    if (section==='generals'){
      const newPinned = [...pinned, ...generals.filter(note => note.id === note_id)]
      const newGenerals = generals.filter(note => note.id !== note_id);

      setPinned(newPinned);
      setGenerals(newGenerals);
    }

    else{
      const newPinned = pinned.filter(note => note.id !== note_id);
      const newGenerals = [...generals, ...pinned.filter(note => note.id === note_id)]

      setPinned(newPinned);
      setGenerals(newGenerals);
    }
  }

  return {
    pinned,
    generals,
    addTodo,
    addPlain,
    deleteNote,
    moveSection
  };
}
