// src/components/Chapter2.js
import React from 'react';
import { useStory } from '../context/StoryContext';

const Chapter2 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Chapter 2</h1>
      <p>You meet a stranger. Do you talk to them or ignore them?</p>
      <div className="mt-4">
        <button onClick={() => nextChapter('ending2')} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Talk
        </button>
        <button onClick={() => nextChapter('ending1')} className="bg-red-500 text-white px-4 py-2 rounded">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default Chapter2;
