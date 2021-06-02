import React from 'react';

export function SingleNote({ id, section, notetype, destroyNote, moveSection }) {
  return (
    <div className="single-note">
      <div className="note-toolbar">
        <button className='pin'
                onClick= {()=>moveSection(section, id)}
                >
          <img src='' alt='pinIcon' />
        </button>
        <button className='lang'><img src='' alt='langIcon' /></button>
      </div>
      <NoteContent notetype={notetype} />
      <div className="destroy">
        <button className="destroy"
          onClick={() => destroyNote(section, id)}>
          <img src='' alt='destroyIcon' />
        </button>
      </div>
    </div>
  );
}

function NoteContent({ notetype }) {
  const ntype = notetype;

  if (ntype === 'todo') {
    return (
      <div className="content-todo">
        <form>
          <input className="content" type="text" placeholder="This is todo note..."></input>
        </form>
      </div>
    );
  }
  else {
    return (
      <div className="content-plain">
        <form>
          <input className="content" type="text" placeholder="This is plain text note..."></input>
        </form>
      </div>
    );
  }
}


