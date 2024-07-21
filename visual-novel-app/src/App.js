import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoryProvider } from './context/StoryContext';
import Story from './components/Story';

const App = () => {
  return (
    <Router>
      <StoryProvider>
        <div className="bg-gray-100 min-h-screen p-4">
          <Story />
        </div>
      </StoryProvider>
    </Router>
  );
};

export default App;