import React, { useState } from 'react';

const Sidebar = () => {
  // Static chat data
  const [chats, setChats] = useState([
    { id: 1, name: 'AI Assistant' },
    { id: 2, name: 'Design Ideas' },
    { id: 3, name: 'Project Discussion' },
  ]);

  const [search, setSearch] = useState('');
  const [activeChatId, setActiveChatId] = useState(1);

  // Filter chats by search
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add a new chat
  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: `New Chat ${chats.length + 1}`,
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  return (
    <aside className="flex-3 sm:w-64 bg-gray-100 border-r h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <button
          onClick={handleNewChat}
          className="w-full px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-950 transition"
        >
          + New Chat
        </button>
      </div>

      {/* Search field */}
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:purple-300"
        />
      </div>

      {/* Chat list */}
      <ul className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`px-4 py-3 cursor-pointer border-b hover:bg-gray-200 transition ${
                chat.id === activeChatId
                  ? 'bg-white font-semibold text-purple-600'
                  : ''
              }`}
            >
              {chat.name}
            </li>
          ))
        ) : (
          <li className="px-4 py-3 text-purple-400">No chats found</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
