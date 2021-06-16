import React, { useState } from 'react';
import { Todo } from './Todo';
import { Plain } from './Plain';
import { Vocab } from "./Vocab";
import pin from './pin.png';
import lang from './lang.png';
import { ExpenseNote } from './ExpenseNote';


export function SingleNote({ id, section, notetype, destroyNote, moveSection, translatePlain }) {
  const today = new Date();
  let dates = useState(today.toLocaleString());

  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin' 
                onClick= {()=>moveSection(section, id)}>
          <img src={pin} alt='pinIcon' className='pinIcon' />
        </button>
        <button className='lang'
                onClick={() =>translatePlain(section, id)}><img src={lang} alt='langIcon' className='langIcon'/></button>
      </div>
      <NoteContent notetype={notetype} />
      <div className="date">{dates}</div>
      <div className="destroy">
        <button type="button" class="btn btn-light btn-sm" 
          onClick={() => destroyNote(section, id)}>
          {/* <img src='' alt='destroyIcon' /> */}
          메모 삭제
        </button>
      </div>
    </div>
  );
}

function NoteContent({ notetype }) {
  const ntype = notetype;
  if (ntype === 'todo') {
    return (<Todo />);
  }
  else if (ntype === 'plain') {
    return (
      <div className="content-plain">
        <Plain />
      </div>
    );
  }
  else if (ntype === 'vocab') {
    return (<Vocab />)
  }

  else if (ntype === 'expense'){
    return(<ExpenseNote />)
  }
}


