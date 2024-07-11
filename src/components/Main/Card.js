import React from 'react';
import './Card.css';

const Card = ({ image, title, category }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <div className="card-category">{category}</div>
        <h3 className="card-title">{title}</h3>
        <div className="card-buttons">
          <button className="card-button">Borrar</button>
          <button className="card-button">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
