import React from "react";
import { ChatProvider } from "./context/ChatContext";
import Chat from "./components/Chat";

const App = () => {
  return (
    <ChatProvider>
      <div className="bg-gray-200 min-h-screen p-4">
        <Chat />
      </div>
    </ChatProvider>
  );
};

export default App;