// src/components/ChatInput.js
import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';

const ChatInput = () => {
  const { addMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ text: input, sender: 'User', id: Date.now() });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
