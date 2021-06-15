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
    vocab.meaning=translatePlain(vocab.meaning);
    const newVocabs = [...vocabs, vocab];
    setVocabs(newVocabs);
  };

  function deleteVocab(id) {
    console.log('working');
    const newVocabs = vocabs.filter(vocab => vocab.id !== id);
    setVocabs(newVocabs);
  };

  function translatePlain(){
    const headers={
      'X-Naver-Client-Id' : 'JXgBev9YnhIrGCrQOXtw',
      'X-Naver-Client-Secret' : '1nwuW7Sf4i'
    }
    var text;
    const translateApi = async () => {
        const response = await axios.post(
          '/api/v1/papago/n2mt', {source : 'ko', target : 'en', text : '안녕'}, {headers}
        );
        text = JSON.stringify(response.data.message.result.translatedText);
        console.log(text);
        return text
      }
    //const newVocabs= [...vocabs];
    //console.log(newVocabs);
    translateApi().then();
  }

  return {
    vocabs, setVocabs,
    addVocab,
    deleteVocab,
    translatePlain
  };
}



