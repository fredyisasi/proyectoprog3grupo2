import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

const images = [
  { src: "/Assets-3/imagenes/panoramicas1.png", author: "Ansel Adams" },
  { src: "/Assets-3/imagenes/panoramicas2.png", author: "Dorothea Lange" },
  { src: "/Assets-3/imagenes/panoramicas3.png", author: "Robert Capa" },
  { src: "/Assets-3/imagenes/panoramicas4.png", author: "Sebastião Salgado" },
  { src: "/Assets-3/imagenes/panoramicas5.png", author: "Elliott Erwitt" },
  { src: "/Assets-3/imagenes/panoramicas6.png", author: "Dorothea Lange" },
  { src: "/Assets-3/imagenes/panoramicas7.png", author: "Robert Frank" },
  { src: "/Assets-3/imagenes/panoramicas8.png", author: "Robert Capa" },
  { src: "/Assets-3/imagenes/panoramicas9.png", author: "Ansel Adams" },
  { src: "/Assets-3/imagenes/panoramicas10.png", author: "Robert Frank" },
  { src: "/Assets-3/imagenes/panoramicas11.png", author: "Sebastião Salgado" },
  { src: "/Assets-3/imagenes/panoramicas12.png", author: "Elliott Erwitt" },
  { src: "/Assets-3/imagenes/panoramicas13.png", author: "Ansel Adams" },
  { src: "/Assets-3/imagenes/panoramicas14.png", author: "Dorothea Lange" },
  { src: "/Assets-3/imagenes/panoramicas15.png", author: "Robert Capa" },
  { src: "/Assets-3/imagenes/panoramicas16.png", author: "Robert Frank" },
  { src: "/Assets-3/imagenes/panoramicas17.png", author: "Sebastião Salgado" },
  { src: "/Assets-3/imagenes/panoramicas18.png", author: "Robert Frank" },
  { src: "/Assets-3/imagenes/panoramicas19.png", author: "Elliott Erwitt" },
  { src: "/Assets-3/imagenes/panoramicas20.png", author: "Elliott Erwitt" },
];

const GaleriaArqui = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentImageIndex];
  const shareUrl = window.location.href; // URL actual de la página

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.src} alt={`Gallery Image ${index + 1}`} onClick={() => openModal(index)} />
          <div className="author-name">{image.author}</div>
        </div>
      ))}
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <button className="prev-button" onClick={prevImage}>‹</button>
            <img src={currentImage.src} alt={`Gallery Image ${currentImageIndex + 1}`} className="modal-image" />
            <div className="share-buttons">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-button facebook">
                <img src="/Assets-2/imagenes/iconof.png" alt="Facebook" /> Facebook
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                <img src="/Assets-2/imagenes/iconox.png" alt="Twitter" /> Twittear
              </a>
              <a href={`https://wa.me/?text=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-button whatsapp">
                <img src="/Assets-2/imagenes/iconow.png" alt="WhatsApp" /> WhatsApp
              </a>
              <a href={`https://t.me/share/url?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-button telegram">
                <img src="/Assets-2/imagenes/iconot.png" alt="Telegram" /> Telegram
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                <img src="/Assets-2/imagenes/iconoL.png" alt="LinkedIn" /> LinkedIn
              </a>
            </div>
            <button className="next-button" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaArqui;

