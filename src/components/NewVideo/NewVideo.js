import React, { useState } from 'react';
import './NewVideo.css';

const NewVideo = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para agregar un nuevo video a tus datos
    console.log({ title, category, image, video, description });
  };

  return (
    <div className="new-video">
      <h1>Nuevo Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título"
          />
        </div>
        <div>
          <label>Categoría</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Seleccione una categoría"
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Ingrese el enlace de la imagen"
          />
        </div>
        <div>
          <label>Video</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Ingrese el enlace del video"
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="¿De qué se trata este video?"
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NewVideo;
