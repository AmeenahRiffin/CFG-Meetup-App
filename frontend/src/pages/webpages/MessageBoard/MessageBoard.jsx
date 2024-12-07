// import React, { useState } from "react";
// import Card from "./Card/Card"; // Adjusted import path for Card component
// import DropdownFilter from "./DropdownFilter/DropdownFilter"; // Adjusted import path for DropdownFilter component
// import messageData from "./messageData"; // Adjusted import path for message data
// import Navbar from "./navbar/Navbar"; // Adjusted import path for Navbar
// import "./MessageBoard.css";

// const MessageBoard = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Filter messages based on selected category
//   const filteredMessages = selectedCategory
//     ? messageData.filter(
//         (message) => message.post_category === selectedCategory
//       )
//     : messageData;

//   return (
//     <div className="message-board">
//       <Navbar />
//       <header>
//         <div className="header-content">
//           {" "}
//           {/* New div wrapping title and dropdown */}
//           <h1 className="message-board-title">Message Board</h1>
//           <DropdownFilter
//             className="dropdown-filter"
//             selectedCategory={selectedCategory}
//             onCategoryChange={setSelectedCategory}
//           />
//         </div>
//       </header>
//       <main className="content">
//         <div className="message-cards-wrapper">
//           {filteredMessages.map((message) => (
//             <Card key={message.id} message={message} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MessageBoard;

// import React, { useState } from "react";
// import Card from "./Card/Card"; // Adjusted import path for Card component
// import DropdownFilter from "./DropdownFilter/DropdownFilter"; // Adjusted import path for DropdownFilter component
// import messageData from "./messageData"; // Adjusted import path for message data
// import Navbar from "./navbar/Navbar"; // Adjusted import path for Navbar
// import CreatePostButton from "./CreatePostButton/CreatePostButton"; // Import CreatePostButton
// import "./MessageBoard.css";

// const MessageBoard = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Filter messages based on selected category
//   const filteredMessages = selectedCategory
//     ? messageData.filter(
//         (message) => message.post_category === selectedCategory
//       )
//     : messageData;

//   return (
//     <div className="message-board">
//       <Navbar />
//       <header>
//         <div className="header-content">
//           <h1 className="message-board-title">Message Board</h1>
//           {/* Wrap DropdownFilter and CreatePostButton in a new div with class 'controls' */}
//           <div className="controls">
//             {" "}
//             {/* This is the new container */}
//             <DropdownFilter
//               className="dropdown-filter"
//               selectedCategory={selectedCategory}
//               onCategoryChange={setSelectedCategory}
//             />
//             <CreatePostButton /> {/* Create Post button */}
//           </div>
//         </div>
//       </header>
//       <main className="content">
//         <div className="message-cards-wrapper">
//           {filteredMessages.map((message) => (
//             <Card key={message.id} message={message} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MessageBoard;

// import React, { useState } from "react";
// import Card from "./Card/Card"; // Adjusted import path for Card component
// import DropdownFilter from "./DropdownFilter/DropdownFilter"; // Adjusted import path for DropdownFilter component
// import messageData from "./messageData"; // Adjusted import path for message data
// import Navbar from "./navbar/Navbar"; // Adjusted import path for Navbar
// import CreatePostButton from "./CreatePostButton/CreatePostButton"; // Import CreatePostButton
// import PostModal from "./PostModal/PostModal";
// import "./MessageBoard.css";

// const MessageBoard = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Filter messages based on selected category
//   const filteredMessages = selectedCategory
//     ? messageData.filter(
//         (message) => message.post_category === selectedCategory
//       )
//     : messageData;

//   return (
//     <div className="message-board">
//       <Navbar />
//       <header>
//         <div className="header-content">
//           <h1 className="message-board-title">Message Board</h1>
//           {/* Wrap DropdownFilter and CreatePostButton in a new div with class 'controls' */}
//           <div className="controls">
//             {" "}
//             {/* This is the new container */}
//             <DropdownFilter
//               className="dropdown-filter"
//               selectedCategory={selectedCategory}
//               onCategoryChange={setSelectedCategory}
//             />
//             <CreatePostButton /> {/* Create Post button */}
//           </div>
//         </div>
//       </header>
//       <main className="content">
//         <div className="message-cards-wrapper">
//           {filteredMessages.map((message) => (
//             <Card key={message.id} message={message} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MessageBoard;

// import React, { useState } from "react";
// import Card from "./Card/Card"; // <--- Card Component
// import DropdownFilter from "./DropdownFilter/DropdownFilter"; // <--- DropdownFilter Component
// import messageData from "./messageData"; // <--- Message Data Source
// import Navbar from "./navbar/Navbar"; // <--- Navbar Component
// import CreatePostButton from "./CreatePostButton/CreatePostButton"; // <--- CreatePostButton Component
// import PostModal from "./PostModal/PostModal"; // <--- PostModal Component
// import "./MessageBoard.css";

import React, { useState } from "react";
import Card from "../../../components/Card/Card"; // Corrected path for Card Component
import DropdownFilter from "../../../components/DropdownFilter/DropdownFilter"; // Corrected path for DropdownFilter Component
import messageData from "../../../Data/messageData"; // Message Data Source (ensure casing matches)
import Navbar from "../../../components/Navbar/Navbar"; // Corrected path for Navbar Component
import PostModal from "../../../components/PostModal/PostModal"; // Corrected path for PostModal Component
import "./MessageBoard.css";

const MessageBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Filter messages based on selected category
  const filteredMessages = selectedCategory
    ? messageData.filter(
        (message) => message.post_category === selectedCategory
      )
    : messageData;

  return (
    <div className="message-board-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="message-board-header">
        <div className="header-content">
          <h1 className="message-board-title">Message Board</h1>
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
      </header>

      {/* Main Content */}
      <main className="message-board-content">
        <div className="message-cards-wrapper">
          {filteredMessages.map((message) => (
            <Card key={message.id} message={message} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MessageBoard;