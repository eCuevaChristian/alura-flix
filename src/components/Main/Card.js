import React from 'react';
import './Card.css';

const Card = ({ image, title, category, categoryColor, onDelete }) => {
  const gradientBorderStyle = {
    backgroundImage: `linear-gradient(${categoryColor}, #000)`, // Degradado del color de la categoría al negro
  };

  return (
    <div className="card" style={gradientBorderStyle}>
      <div className="card-content">
        <img src={image} alt={title} className="card-image" />
        <div className="card-info">
          <div className="card-category">{category}</div>
          <h3 className="card-title">{title}</h3>
          <div className="card-buttons">
            <button className="card-button" onClick={onDelete}>Borrar</button>
            <button className="card-button">Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
