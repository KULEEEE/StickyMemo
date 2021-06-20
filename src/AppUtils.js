import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import swal from 'sweetalert';
import {Deletejson, Getjson} from './Makejson';

export function AppUtils() {

    // const [pinned, setPinned] = useState([
    //   {id:uuid(),notetype:'plain'},
    //   {id:uuid(),notetype:'plain'},
    //   {id:uuid(),notetype:'plain'}
    // ]);
    // const [general, setGeneral] = useState([
    //   {id:uuid(),notetype:'plain'},
    //   {id:uuid(),notetype:'plain'},
    //   {id:uuid(),notetype:'plain'}
    // ]);

    const [pinned, setPinned] = useState();
    const [general, setGeneral] = useState();
    useEffect(()=>{
      if(Getjson() === 'no'){
        setPinned([
          {id:uuid(),notetype:'plain'},
          {id:uuid(),notetype:'plain'},
          {id:uuid(),notetype:'plain'}
        ]);
        setGeneral([
          {id:uuid(),notetype:'plain'},
          {id:uuid(),notetype:'plain'},
          {id:uuid(),notetype:'plain'}
        ]);
      }
      else{
        const array = Getjson();
        const pin = new Array();
        const gen = new Array();
        for(var key=0; key<array.length; key++){
          if(array[key].section === 'pinned'){
            pin.push({id:array[key].noteid,notetype:array[key].type});
          }
          else if (array[key].section === 'general'){
            gen.push({id:array[key].noteid,notetype:array[key].type});
          }
        }
        setPinned(pin);
        setGeneral(gen);
        console.log(array);
      }
    },[]);
    
  
    function addNote(ntype){
      const single_note = {
        id: uuid(),
        notetype: ntype
      }
      const newNotes = [...general, single_note];
      setGeneral(newNotes);
    }
  
    function destroyNote(section, id) {
      Deletejson(id);
      if (section === 'general') {
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
        if(pinned.length >= 5){
          swal("메모는 최대 5개까지 즐겨찾기할 수 있습니다.");
          return;
        }
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