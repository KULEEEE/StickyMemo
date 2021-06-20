import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

export function Plain() {
    return (
        <div>
            <PlainHeader/>
        </div>
    );
}

function PlainHeader() {
    const [value, setValue] = useState('');
    const [plain, setPlain] = useState('');
  
    const handleOnChange = (event) => {
      setValue(event.target.value);
    };
  
    const submitPlain = (event) => {
        const plain = {
            id: uuid(),
            value
        };
        const newplain = plain;
        setPlain(newplain);
    };
  
    return (
      <header className='plain-header'>
      <textarea name="plain-adder" rows="8" cols="35" placeholder='메모를 작성하세요' value={value} onChange={handleOnChange} onKeyUp={submitPlain} autoFocus></textarea>
      </header>
    );
  }