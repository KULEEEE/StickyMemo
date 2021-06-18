import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export function VocabUtils() {
  const [vocabs, setVocabs] = useState([]);

  const addVocab = async (word_in) => {

    const newVocabs = vocabs.map((voc) => {  
      const tempVocabs = {...voc}
      return tempVocabs
    })    

    const meaning = await translatePlain(word_in)
    newVocabs.push({
      id: uuid(),
      word: word_in,
      meaning: meaning
    })
    setVocabs(newVocabs)
  };

  function deleteVocab(id) {
    console.log('working');
    const newVocabs = vocabs.filter(vocab => vocab.id !== id);
    setVocabs(newVocabs);
  };

  const translatePlain = async (sentence) => {

    const headers={
      'X-Naver-Client-Id' : 'JXgBev9YnhIrGCrQOXtw',
      'X-Naver-Client-Secret' : '1nwuW7Sf4i'
    }

    try {
      const response = await axios.post(
        '/api/v1/papago/n2mt', {source : 'ko', target : 'en', text : sentence}, {headers}
      )
      
      return response.data.message.result.translatedText
      
    } catch (err) {
      console.log(err)
      return 'error'
    }
  };

  return {
    vocabs, setVocabs,
    addVocab,
    deleteVocab,
    translatePlain
  };
}



