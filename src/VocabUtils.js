import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export function VocabUtils() {
  const [vocabs, setVocabs] = useState([]);

  function addVocab(word_in, meaning_in) {
    const vocab = {
      id: uuid(),
      word: word_in,
      meaning: meaning_in
    };
    const newVocabs = [...vocabs, vocab];
    setVocabs(newVocabs);
  };

  function deleteVocab(id) {
    console.log('working');
    const newVocabs = vocabs.filter(vocab => vocab.id !== id);
    setVocabs(newVocabs);
  };

  function translatePlain(){
    let newVocabs = [...vocabs];

    const headers={
      'X-Naver-Client-Id' : 'JXgBev9YnhIrGCrQOXtw',
      'X-Naver-Client-Secret' : '1nwuW7Sf4i'
    }
    let text;
    const translateApi = async (sentence) => {
        const response = await axios.post(
          '/api/v1/papago/n2mt', {source : 'ko', target : 'en', text : sentence}, {headers}
        ).then((response)=>{text=response.data.message.result.translatedText;});
        return text
      }
    //vocabs.map((vocab)=>{newVocabs.push(translateApi(vocab.word).resolve())});
    newVocabs.map((voc) => {translateApi(voc.word).then((text)=>{voc.meaning=text})
  })
    console.log(newVocabs);
    setVocabs(newVocabs);
  };

  return {
    vocabs, setVocabs,
    addVocab,
    deleteVocab,
    translatePlain
  };
}



