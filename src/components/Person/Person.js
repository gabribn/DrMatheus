import React from 'react';
import './Person.css';

const Person = ({ imageUrl, text }) => {
  return (
    <div className="person">
      <img
        src={imageUrl}
        alt="Logo"
        className="person-link" 
      />
      <span className="person-text">{text}</span>
    </div>
  );
};

export default Person;
