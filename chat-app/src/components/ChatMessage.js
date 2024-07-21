// src/components/ChatMessage.js
import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`p-2 ${message.sender === 'User' ? 'text-right' : 'text-left'}`}>
      <span className={`inline-block px-3 py-2 rounded ${message.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        {message.text}
      </span>
    </div>
  );
};

export default ChatMessage;
