import React, { useState } from "react";
import "./PostModal.css";

const PostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, content, category });

    setTitle("");
    setContent("");
    setCategory("");
    onClose();
  };

  if (!isOpen) return null;

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