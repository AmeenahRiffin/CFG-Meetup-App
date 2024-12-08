
import React, { useState } from 'react';
import Card from '../../components/Card/Card';  
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';
import messageData from '../../Data/messageData';
import Navbar from '../../components/Navbar/Navbar';
import PostModal from '../../components/PostModal/PostModal';
import './MessageBoard.css';

const MessageBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMessages = selectedCategory
    ? messageData.filter(
        (message) => message.post_category === selectedCategory
      )
    : messageData;

  return (
    <div className="message-board-wrapper">
      <Navbar />
      <header className="message-board-header">
        <div className="header-content">
          <h1 className="message-board-title">Message Board</h1>
          <div className="header-controls">
            <DropdownFilter
              className="dropdown-filter"
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <button
              className="create-post-btn"
              id="open-modal"
              onClick={() => setIsModalOpen(true)}
            >
              Create a Post
            </button>
          </div>
        </div>
      </header>
      <main className="message-board-content">
        <div className="message-cards-container">
          <div className="message-cards-wrapper">
            {filteredMessages.map((message) => (
              <Card key={message.id} message={message} />
            ))}
          </div>
        </div>
      </main>
      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MessageBoard;