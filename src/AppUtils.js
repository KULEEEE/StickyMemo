import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function AppUtils() {
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
  
    function destroyNote(section, id) {
      if (section == 'general') {
        const newNotes = general.filter(singlenote => singlenote.id !== id);
        setGeneral(newNotes);
      }
      else {
        const newNotes = pinned.filter(singlenote => singlenote.id !== id);
        setPinned(newNotes);
      }
    }

    function moveSection(section, note_id){
      var newPinned=[];
      var newGeneral=[];

      if (section==='general'){
        newPinned = [...pinned, ...general.filter(singlenote => singlenote.id === note_id)]
        newGeneral = general.filter(singlenote => singlenote.id !== note_id);
      }
  
      else{
        newPinned = pinned.filter(singlenote => singlenote.id !== note_id);
        newGeneral = [...general, ...pinned.filter(singlenote => singlenote.id === note_id)]
      }
      setPinned(newPinned);
      setGeneral(newGeneral);
    }

  return {
    pinned,
    general,
    addNote,
    destroyNote,
    moveSection
  };
}
