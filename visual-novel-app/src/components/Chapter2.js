// src/components/Chapter2.js
import React from 'react';
import { useStory } from '../context/StoryContext';
import './Chapter2.css';

const Chapter2 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="chapter-container">
      <h1 className="chapter-title">Chapter 2</h1>
      <p className="chapter-text">You meet a stranger. Do you talk to them or ignore them?</p>
      <div className="button-group">
        <button onClick={() => nextChapter('ending2')} className="btn btn-talk">Talk</button>
        <button onClick={() => nextChapter('ending1')} className="btn btn-ignore">Ignore</button>
      </div>
    </div>
  );
};

export default Chapter2;
