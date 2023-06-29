import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dictionary(){
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  return (
    <form onSubmit={() => {
      navigate('/definition/' + word)
    }}>
      <input 
        type="text" 
        onChange={(e) => {
          setWord(e.target.value);
        }} 
      />
      <button>
        Search
      </button>
    </form>
  );
} 