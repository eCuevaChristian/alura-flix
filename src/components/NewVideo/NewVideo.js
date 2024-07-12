import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewVideo.css';

const NewVideo = ({ addVideo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      id: Date.now(),
      image,
      title,
      category,
      description,
      video,
    };
    addVideo(newVideo);
    navigate('/');
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <div className="new-video">
      <h2>Nuevo Video</h2>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form onSubmit={handleSubmit} onReset={handleReset} className="form">
        <div className="form-group">
          <label>Título</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ingrese el título" required />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Seleccione una categoría</option>
            <option value="FRONT END">FRONT END</option>
            <option value="BACK END">BACK END</option>
            <option value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="El enlace es obligatorio" required />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Ingrese el enlace del video" required />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="¿De qué se trata este video?" required></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="reset">Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideo;
