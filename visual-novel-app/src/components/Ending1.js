// src/components/Ending1.js
import React from 'react';
import { useStory } from '../context/StoryContext';
import './Ending1.css';

const Ending1 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="ending-container">
      <h1 className="ending-title">Ending 1</h1>
      <p className="ending-text">You reached a dead end. Try again?</p>
      <button onClick={() => nextChapter('chapter1')} className="btn btn-restart">Restart</button>
    </div>
  );
};

export default Ending1;
