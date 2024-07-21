// src/components/Chapter1.js
import React from 'react';
import { useStory } from '../context/StoryContext';

const Chapter1 = () => {
  const { nextChapter } = useStory();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Chapter 1</h1>
      <p>You are in a forest. Do you go left or right?</p>
      <div className="mt-4">
        <button onClick={() => nextChapter('chapter2')} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Go Left
        </button>
        <button onClick={() => nextChapter('ending1')} className="bg-red-500 text-white px-4 py-2 rounded">
          Go Right
        </button>
      </div>
    </div>
  );
};

export default Chapter1;
