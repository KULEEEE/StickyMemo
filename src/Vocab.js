import React, { useState } from 'react';
import { VocabUtils } from './VocabUtils';


export function Vocab() {
    const { vocabs, setVocabs,
        addVocab,
        deleteVocab,
        updateVocab,
        translatePlain} = VocabUtils();
    return (
        <div className="content-vocab">
            <table>
                <tbody>
                    <VocabHeader addVocab={addVocab} />
                    {vocabs.map(vocab => (
                        <VocabItem key={vocab.id} vocab={vocab} deleteVocab={deleteVocab} updateVocab={updateVocab}/>
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

function VocabItem({ vocab, deleteVocab, updateVocab }) {
    var new_val = vocab;

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
                    value={vocab.word}
                    onChange={onWordChange} />
            </td>
            <td>
                <input placeholder='meaning'
                    value={vocab.meaning}
                    onChange={onMeaningChange} />
            </td>
            <td><button onClick={() => deleteVocab(vocab.id)}>-</button></td>
        </tr>
    );

}
