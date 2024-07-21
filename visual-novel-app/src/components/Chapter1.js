// src/components/Chapter1.js
import React from 'react';
import { useStory } from '../context/StoryContext';
import './Chapter1.css';

const Chapter1 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="chapter-container">
      <h1 className="chapter-title">Chapter 1</h1>
      <p className="chapter-text">You are in a forest. Do you go left or right?</p>
      <div className="button-group">
        <button onClick={() => nextChapter('chapter2')} className="btn btn-left">Go Left</button>
        <button onClick={() => nextChapter('ending1')} className="btn btn-right">Go Right</button>
      </div>
    </div>
  );
};

export default Chapter1;
