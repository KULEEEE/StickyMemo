import React, { useState } from 'react';
import { VocabUtils } from './VocabUtils';
import {Getjson, Setjson} from './Makejson';


export function Vocab({data}) {            
//<button className='lang' onClick={() =>translatePlain()}><img src='' alt='langIcon' /></button>
    const { vocabs, setVocabs,
        addVocab,
        deleteVocab,
        translatePlain} = VocabUtils();
    const vocabarr = new Array();
    return (
        <div className="content-vocab">
            <table>
                <tbody>
                    <VocabHeader addVocab={addVocab} />
                    {vocabs.map(vocab => (
                        <VocabItem key={vocab.id} vocab={vocab} deleteVocab={deleteVocab} translatePlain={translatePlain} vocabarr = {vocabarr} data={data}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function VocabHeader({ addVocab }) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    const onWordChange = (event) => {
        setWord(event.target.value);
    };

    const submitVocab = (event) => {
        if (event.key !== 'Enter')
            return;
        addVocab(word, meaning);
        setWord('');
        setMeaning('');
    };

    return (
        <tr className='vocab-header'>
            <td colSpan='2'>
                <input placeholder='word'
                    value={word}
                    onChange={onWordChange}
                    onKeyUp={submitVocab}
                    autoFocus />
            </td>
        </tr>
    );

}


function VocabItem({ vocab, deleteVocab, vocabarr, data }) {
    //const [word, setWord] = useState(vocab.word);
    //const [meaning, setMeaning] = useState(vocab.meaning);
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
        //setWord(event.target.value);
    };
    const onMeaningChange = (event) => {
        //setMeaning(event.target.value);
    };

    return (
        <tr className='vocab-item'>
            <td>
                <input placeholder='word'
                    value={vocab.word}
                    onChange={onWordChange} />
            </td>
            <td>
                <input placeholder='meaning'
                    value={vocab.meaning}
                    onChange={onMeaningChange} />
            </td>
            <td><button>-</button></td>
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