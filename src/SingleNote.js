import React, { useState } from 'react';
import { Todo } from './Todo';
import { Plain } from './Plain';
import { Vocab } from "./Vocab";
import pin from './pin.png';
import { ExpenseNote } from './ExpenseNote';


export function SingleNote({ id, section, notetype, destroyNote, moveSection, translatePlain }) {
  const today = new Date();
  let dates = useState(today.toLocaleString());
  const data = new Object();
  data.noteid = id;
  data.section = section;
  data.date = dates;

  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin' 
                onClick= {()=>moveSection(section, id)}>
          <img src={pin} alt='pinIcon' className='pinIcon' />
        </button>
        <button className='lang'
                onClick={() =>translatePlain(section, id)}><img src='' alt='langIcon' /></button>
      </div>
      <NoteContent notetype={notetype} data={data} />
      <div className="destroy">
        <button type="button" className="btn btn-light btn-sm" 
                onClick={() => destroyNote(section, id)}>메모 삭제</button>
        {dates}
      </div>
    </div>
  );
}

function NoteContent({ notetype, data }) {
  const ntype = notetype;
  if (ntype === 'todo') {
    data.type = 'todo';
    return (<Todo data = {data} />);
  }
  else if (ntype === 'plain') {
    data.type = 'plain';
    return (
      <div className="content-plain">
        <Plain data = {data}/>
      </div>
    );
  }
  else if (ntype === 'vocab') {
    data.type = 'vocab';
    return (<Vocab data = {data}/>)
  }

  else if (ntype === 'expense'){
    data.type = 'expense'
    return(<ExpenseNote data = {data}/>)
  }
}


