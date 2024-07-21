// src/components/Ending1.js
import React from 'react';
import { useStory } from '../context/StoryContext';

const Ending1 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Ending 1</h1>
      <p>You reached a dead end. Try again?</p>
      <button onClick={() => nextChapter('chapter1')} className="bg-green-500 text-white px-4 py-2 rounded">
        Restart
      </button>
    </div>
  );
};

export default Ending1;
