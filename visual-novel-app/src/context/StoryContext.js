import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StoryContext = createContext();

export const useStory = () => useContext(StoryContext);

export const StoryProvider = ({ children }) => {
  const [chapter, setChapter] = useState('chapter1');
  const navigate = useNavigate();

  const nextChapter = (next) => {
    setChapter(next);
  };

  useEffect(() => {
    navigate(`/${chapter}`);
  }, [chapter, navigate]);

  return (
    <StoryContext.Provider value={{ chapter, nextChapter }}>
      {children}
    </StoryContext.Provider>
  );
};