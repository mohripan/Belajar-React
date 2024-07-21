// src/components/Story.js
import React from 'react';
import { useStory } from '../context/StoryContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Ending1 from './Ending1';
import Ending2 from './Ending2';
import './Story.css';

const Story = () => {
  const { chapter } = useStory();

  return (
    <div className="story-container">
      <Routes>
        <Route path="/" element={<Navigate to={`/${chapter}`} />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/ending1" element={<Ending1 />} />
        <Route path="/ending2" element={<Ending2 />} />
      </Routes>
    </div>
  );
};

export default Story;