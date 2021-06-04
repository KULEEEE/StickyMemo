import React, { useState } from 'react';
import { PlainUtils } from './PlainUtils';

export function PlainNote({note_id, section, deleteNote, moveSection, translatePlain}) {
  // const [section, setSection] = useState('generals');

  // const toggleSection = () =>{
  //   if (section==='generals') setSection('pinned');
  //   else setSection('generals');
  // }
  const { plains,
    addPlain,
    deletePlain,
    togglePlain,
    translatePlain
  } = PlainUtils();


  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin' onClick={()=>{
            moveSection(section, note_id);
            // toggleSection();
            }
          }>
          <img src='' alt='pinIcon'/></button>
        <button className='lang' onClick={() => translatePlain()}><img src='' alt='langIcon'/></button>
      </div>
      <PlainHeader addPlain={addPlain} />
      <PlainList
        plains={plains}
        togglePlain={togglePlain}
        deletePlain={deletePlain} />
      <div className="destroy">
        <button className="destroy" onClick={() => deleteNote(section, note_id)}><img src='' alt='destroyIcon'/></button>
      </div>
    </div>
  );
}

function PlainHeader({ addPlain }) {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const submitPlain = (event) => {
    if (event.key !== 'Enter')
      return;
    addPlain(value);
    setValue('');
  };

  return (
    <header className='header'>
      <input
        className='new-plain'
        placeholder='Write here'
        value={value}
        onChange={handleOnChange}
        onKeyUp={submitPlain}
        autoFocus />
    </header>
  );
}

function PlainList({ plains = [], togglePlain, deletePlain }) {
  return (
    <ul className="plain-list">
      {plains.map(plain => (
        <div className="view">
          <label>{plain.task}</label>
          <button
            className='destroy'
            onClick={() => deletePlain(plain.id)} />
        </div>
      ))}
    </ul>
  );
}


