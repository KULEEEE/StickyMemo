import React, { useState } from 'react';
import { Todo } from './Todo';
import { Plain } from './Plain';
import { Vocab } from "./Vocab";
import pin from './pin.png';
import { Expense } from './Expense';


export function SingleNote({ id, section, notetype, destroyNote, moveSection }) {
  const today = new Date();
  let dates = useState(today.toLocaleString());
  
  // getJson으로 id 확인하고, 없다면 생성, 
  const data = {};
  data.noteid = id;
  data.section = section;
  data.date = dates;
  //있다면 load

  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin' 
                onClick= {()=>moveSection(section, id)}>
          <img src={pin} alt='pinIcon' className='pinIcon' />
        </button>
      </div>
      <NoteContent noteid={id} notetype={notetype} data={data} />
      <div className="date">{dates}</div>
      <div className="destroy">
        <button type="button" className="btn btn-light btn-sm" 
          onClick={() => destroyNote(section, id)}>
          삭제
        </button>
      </div>
    </div>
  );
}

function NoteContent({ notetype, data }) {
  const ntype = notetype;
  
  if (ntype === 'todo') return (<Todo data={data} />);
  else if (ntype === 'plain') {
    data.type = 'plain';
    return (
      <div className="content-plain">
        <Plain data = {data}/>
      </div>
    );
  }
  else if (ntype === 'vocab') return (<Vocab data={data}/>);
  else if (ntype === 'expense') return(<Expense data={data}/>);
}


