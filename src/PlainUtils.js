import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export function PlainUtils() {
  const [plains, setPlains] = useState([]);

  const addPlain = (task) => {
    const plain = {
      id: uuid(),
      task,
      completed: false
    };
    const newPlains = [plain];
    setPlains(newPlains);
  };

  const togglePlain = (id) => {
    const newPlains = plains.map(plain => {
      if (plain.id === id)
        return { ...plain, completed: !plain.completed };
      return plain;
    });
    setPlains(newPlains);
  };

  const deletePlain = (id) => {
    const newPlains = plains.filter(plain => plain.id !== id);
    setPlains(newPlains);
  };

  function translatePlain(){
    const headers={
      'X-Naver-Client-Id' : 'JXgBev9YnhIrGCrQOXtw',
      'X-Naver-Client-Secret' : '1nwuW7Sf4i'
    }
    
    const translateApi = async () => {
        const response = await axios.post(
          '/api/v1/papago/n2mt', {source : 'ko', target : 'en', text : '안녕'}, {headers}
        );
        console.log(response.data); // 데이터는 response.data 안에 들어있습니다.
      }
    translateApi();
  }

  return {
    plains,
    addPlain,
    deletePlain,
    togglePlain,
    translatePlain
  };

}
