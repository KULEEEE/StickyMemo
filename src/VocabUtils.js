import { useState } from 'react';
import { v4 as uuid } from 'uuid';

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

  return {
    vocabs, setVocabs,
    addVocab,
    deleteVocab
  };
}



