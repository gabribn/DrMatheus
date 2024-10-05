import React from 'react';
import './Servicos.css'; 

const Servicos = ({ imageUrl, text, title }) => {
  return (
      <div className="servico-container">
        <h2>{title}</h2> {}
        <img
          src={imageUrl}
          alt="Logo"
          className="servico-logo"
        /> {}
        <span className="servico-text">{text}</span> {}
      </div>
  );
};

export default Servicos;
