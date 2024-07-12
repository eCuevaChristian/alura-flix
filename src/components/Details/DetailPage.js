import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const location = useLocation();
  const { image, title, category, description, video } = location.state;

  return (
    <div className="detail-page">
      <div className="detailconten">
        <div className="detailLetra">
          <h1 className="detail-title">{title}</h1>
          <h2 className="detail-category">{category}</h2>
          <p className="detail-description">{description}</p>
        </div>     
      <img src={image} alt={title} className="detail-image" />
      </div>
    <div className="detail-video">
        <iframe
          width="800"
          height="450"
          src={video}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailPage;
