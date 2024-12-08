// import React from "react";
// import "./PostModal.css";

// const PostModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render anything if the modal is not open

//   return (
//     <div className="modal" id="post-modal" style={{ display: "flex" }}>
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Create a Post</h2>
//           <button className="close-btn" onClick={onClose}>
//             X
//           </button>
//         </div>
//         <form>
//           <textarea
//             placeholder="Enter your title here"
//             required
//             style={{ height: "25px" }}
//           ></textarea>
//           <textarea placeholder="Share what's on your mind" required></textarea>
//           <select required>
//             <option value="" disabled selected>
//               Choose category of post
//             </option>
//             <option value="Schools & Education">Schools & Education</option>
//             <option value="Real Estate & Housing">Real Estate & Housing</option>
//             <option value="Local Services & Amenities">
//               Local Services & Amenities
//             </option>
//             <option value="Safety & Security">Safety & Security</option>
//             <option value="Local Activities & Volunteering">
//               Local Activities & Volunteering
//             </option>
//             <option value="Lost & Found">Lost & Found</option>
//             <option value="Other">Other</option>
//           </select>
//           <button type="submit" className="submit-post-btn">
//             Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostModal;

import React, { useState } from "react";
import "./PostModal.css"; // Assuming you have a CSS file for styles

const PostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log({ title, content, category });
    // Clear the form after submission if necessary
    setTitle("");
    setContent("");
    setCategory("");
    onClose(); // Close the modal after posting
  };

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal" id="post-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create a Post</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your title here"
            required
            style={{ height: "25px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Share what's on your mind"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Choose category of post
            </option>
            <option value="Schools & Education">Schools & Education</option>
            <option value="Real Estate & Housing">Real Estate & Housing</option>
            <option value="Local Services & Amenities">
              Local Services & Amenities
            </option>
            <option value="Safety & Security">Safety & Security</option>
            <option value="Local Activities & Volunteering">
              Local Activities & Volunteering
            </option>
            <option value="Lost & Found">Lost & Found</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit" className="submit-post-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
