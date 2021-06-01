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
  

  return {
    pinned,
    general,
    addNote,
    destroyNote
  };
}
