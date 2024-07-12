import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const location = useLocation();
  const { image, title, category, description } = location.state;

  return (
    <div className="detail-page">
      <h1 className="detail-title">{title}</h1>
      <h2 className="detail-category">{category}</h2>
      <img src={image} alt={title} className="detail-image" />
      <p className="detail-description">{description}</p>
      <video controls className="detail-video">
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DetailPage;
