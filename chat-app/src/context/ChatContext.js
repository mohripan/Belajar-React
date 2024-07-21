// src/context/ChatContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  // Simulate receiving messages
  useEffect(() => {
    const interval = setInterval(() => {
      addMessage({ text: 'New message from server', sender: 'Server', id: Date.now() });
    }, 5000);
    return () => clearInterval(interval);
  }, [addMessage]);

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
