// src/components/Ending2.js
import React from 'react';
import { useStory } from '../context/StoryContext';
import './Ending2.css';

const Ending2 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="ending-container">
      <h1 className="ending-title">Ending 2</h1>
      <p className="ending-text">You found a treasure! Play again?</p>
      <button onClick={() => nextChapter('chapter1')} className="btn btn-restart">Restart</button>
    </div>
  );
};

export default Ending2;
