import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ image, title, category, categoryColor, description, video, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail', { state: { image, title, category, description, video } });
  };

  const gradientBorderStyle = {
    backgroundImage: `linear-gradient(${categoryColor}, #000)`,
  };

  return (
    <div className="card" style={gradientBorderStyle}>
      <div className="card-content" onClick={handleClick}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-info">
          <div className="card-category">{category}</div>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
      <div className="card-buttons">
        <button className="card-button" onClick={onDelete}>Borrar</button>
        <button className="card-button" onClick={onEdit}>Editar</button>
      </div>
    </div>
  );
}

export default Card;
