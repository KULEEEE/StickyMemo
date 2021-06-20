import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import {Getjson, Setjson} from './Makejson';

export function Plain({data}) {
    return (
        <div>
            <PlainHeader data={data}/>
        </div>
    );
}

function PlainHeader({data}) {
    const [value, setValue] = useState('');
    const [plain, setPlain] = useState('');

    useEffect(()=>{
        const js = Getjson();
        for(var i=0; i<js.length; i++){
            if(js[i].noteid === data.noteid){
                setValue(js[i].value);
            }
        }
        console.log(js);
    },[]);
     
  
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
        data.value = value;
        Setjson(data);
        console.log(Getjson());
    };
  
    return (
      <header className='plain-header'>
      <textarea name="plain-adder" rows="8" cols="35" placeholder='Write here' value={value} onChange={handleOnChange} onKeyUp={submitPlain} autoFocus></textarea>
      </header>
    );
  }
  /* JSON
  date
  noteid
  section
  type
  value
  */