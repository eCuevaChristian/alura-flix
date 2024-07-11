import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/img/Logo.svg" alt="ALURAFILX Logo" className="logoHeader" />
      </div>
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/nuevo-video" className="nav-link nav-link--highlight">Nuevo Video</a>
      </nav>
    </header>
  );
}

export default Header;
