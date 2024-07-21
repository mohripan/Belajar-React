// src/components/Chat.js
import React from 'react';
import { useChat } from '../context/ChatContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const Chat = () => {
  const { messages } = useChat();

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Chat App</h1>
      <div className="chat-messages overflow-y-scroll h-64 mb-4 p-2 border rounded bg-white">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
