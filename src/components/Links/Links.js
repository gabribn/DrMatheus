import React from 'react';
import './Links.css'; 

const Link = ({ imageUrl, text, link }) => {
  return (
    <a
      href={link} 
      className="link" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link-container">
        <img
          src={imageUrl}
          alt="Logo"
          className="link-logo"
        />
        <span className="link-text">{text}</span> {}
      </div>
    </a>
  );
};

export default Link;
