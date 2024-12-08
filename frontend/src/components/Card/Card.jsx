import React from "react";
import "./Card.css";

const Card = ({ message }) => {
  return (
    <div className="messageCard" data-category={message.post_category}>
      <div className="messageDetails">
        <div className="postDate">
          <span>📅 {message.post_date}</span>
          <br />
        </div>
        <h2 className="postCategory">📂 {message.post_category}</h2>
        <p className="postTitle"> 📝 {message.post_title}</p>
        <p className="postContent"> {message.post_content}</p>
      </div>
    </div>
  );
};

export default Card;
