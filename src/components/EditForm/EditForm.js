import React, { useState } from 'react';
import './EditForm.css';

const EditForm = ({ card, onSave, onCancel }) => {
  const [editedCard, setEditedCard] = useState({ ...card });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard({ ...editedCard, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedCard);
  };

  return (
    <div className="edit-form-overlay">
      <div className="edit-form">
        <h2>Editar Card</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input type="text" name="title" value={editedCard.title} onChange={handleChange} />
          </label>
          <label>
            Categoría:
            <input type="text" name="category" value={editedCard.category} onChange={handleChange} />
          </label>
          <label>
            Imagen:
            <input type="text" name="image" value={editedCard.image} onChange={handleChange} />
          </label>
          <label>
            Video de YouTube:
            <input type="text" name="video" value={editedCard.video} onChange={handleChange} />
          </label>
          <label>
            Descripción:
            <textarea name="description" value={editedCard.description} onChange={handleChange} />
          </label>
          <div className="edit-form-buttons">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
        {editedCard.video && (
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={editedCard.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditForm;
