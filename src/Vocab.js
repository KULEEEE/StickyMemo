import React, { useState, useEffect } from 'react';
import { VocabUtils } from './VocabUtils';
import {Getjson, Setjson} from './Makejson';
import delete_icon from './delete-icon.png';


export function Vocab({data}) {            
    const { vocabs, setVocabs,
        addVocab,
        deleteVocab,
        updateVocab,
        translatePlain} = VocabUtils();
    const vocabarr = new Array();
    return (
        <div className="content-vocab">
            <table>
                <tbody>
                    <VocabHeader addVocab={addVocab} data={data}/>
                    {vocabs.map(vocab => (
                        <VocabItem key={vocab.id} vocab={vocab} deleteVocab={deleteVocab} updateVocab={updateVocab} vocabarr = {vocabarr} data={data}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function VocabHeader({ addVocab, data }) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    useEffect(()=>{
        const js = Getjson();
        console.log(js);
        for(var i=0; i<js.length; i++){
            if(js[i].noteid === data.noteid){
                for(var j=0; j<js[i].arr.length; j++){
                  addVocab(js[i].arr[j].word, js[i].arr[j].meaning);
                }
            }
        }
    },[]);

    const onWordChange = (event) => {
        setWord(event.target.value);
    };

    const submitVocab = (event) => {
        if (event.key !== 'Enter')
            return;
        addVocab(word, meaning);
        setWord('');
    };

    return (
        <tr className='vocab-header'>
            <td colSpan='2'>
                <input placeholder='영어 단어'
                    value={word}
                    style = {{"width":"135px"}}
                    onChange={onWordChange}
                    onKeyUp={submitVocab}
                    autoFocus />
            </td>
        </tr>
    );

}

function VocabItem({ vocab, deleteVocab, updateVocab, vocabarr, data }) {
    var new_val = vocab;
    const vocabobj = new Object();

    vocabobj.vocabid = vocab.id;
    vocabobj.word = vocab.word;
    vocabobj.meaning = vocab.meaning;
    vocabarr.push(vocabobj);
    const uniquearr = vocabarr.reduceRight((prev, now) => {
        if (!prev.some(obj => obj.vocabid === now.vocabid )) {
          prev.push(now);
        }
        return prev;
      }, []);
      const reverse = uniquearr.reverse();
      data.arr = reverse;
      Setjson(data);
      console.log(Getjson());

    const onWordChange = (event) => {
        new_val.word = event.target.value;
        updateVocab(vocab.id, new_val);
    }
    const onMeaningChange = (event) => {
        new_val.meaning = event.target.value;
        updateVocab(vocab.id, new_val);
    };

    return (
        <tr className='vocab-item'>
            <td>
                <input placeholder='word'
                    style = {{"width":"135px"}}
                    value={vocab.word}
                    onChange={onWordChange} />
            </td>
            <td>
                <input placeholder='meaning'
                    style = {{"width":"135px"}}
                    value={vocab.meaning}
                    onChange={onMeaningChange} />
            </td>
            <td>
                <button onClick={() => deleteVocab(vocab.id)}
                        className = "vocab-delete">
                    <img src={delete_icon} alt='delete' className='deleteIcon'/>
                </button>
            </td>
        </tr>
    );

}
/*JSON
arr{
    meaning
    vocabid
    word
}
date
noteid
section
type
*/