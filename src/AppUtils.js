import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export function AppUtils() {
    const [pinned, setPinned] = useState([
      {id:uuid(),notetype:'plain'}
    ]);
    const [general, setGeneral] = useState([
      {id:uuid(),notetype:'plain'},
      {id:uuid(),notetype:'plain'},
      {id:uuid(),notetype:'plain'}
    ]);
  
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

    function translatePlain(section, id){
      const headers={
        'X-Naver-Client-Id' : 'JXgBev9YnhIrGCrQOXtw',
        'X-Naver-Client-Secret' : '1nwuW7Sf4i'
      }
      
      const translateApi = async () => {
          const response = await axios.post(
            '/api/v1/papago/n2mt', {source : 'ko', target : 'en', text : '안녕'}, {headers}
          );
          console.log(response.data); // 데이터는 response.data 안에 들어있습니다.
        }
      translateApi();
    }

    function moveSection(section, note_id){
      var newPinned=[];
      var newGeneral=[];

      if (section==='general'){
        if(pinned.length > 4) return;
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
    moveSection,
    translatePlain
  };
}