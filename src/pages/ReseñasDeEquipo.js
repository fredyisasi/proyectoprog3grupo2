import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './ReseñasDeEquipo.css'; // Importamos el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReseñasDeEquipo() {
  return (
    <div>
      <h1>RESEÑAS DE EQUIPO</h1>
      <div className="reseñas-de-equipo-list">
        <div className="reseña-de-equipo-card">
          <img src="/assets/images/camera1.png" alt="Camera 1" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EOS 5D Mark IV</h2>
            </Link>
            <p>Excelente cámara para fotógrafos profesionales...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/lens2.png" alt="Lens 2" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EF 24-70mm f/2.8L II USM</h2>
            </Link>
            <p>Lente versátil y de alta calidad...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-full" />
              <span>(4.8)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/accessory3.png" alt="Accessory 3" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EOS 5D Mark IV</h2>
            </Link>
            <p>Excelente cámara para fotógrafos profesionales...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.1)</span>
            </div>
          </div>
        </div>
  
            </div>
          </div>
    
    
  );
}

export default ReseñasDeEquipo;