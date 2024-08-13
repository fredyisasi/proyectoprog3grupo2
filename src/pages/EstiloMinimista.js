import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

const images = [
  { src: "/Assets-3/imagenes/minimalista1.png", author: "Julius Shulman" },
  { src: "/Assets-3/imagenes/minimalista2.png", author: "Fernando Guerra" },
  { src: "/Assets-3/imagenes/minimalista3.png", author: "Norman McGrath" },
  { src: "/Assets-3/imagenes/minimalista4.png", author: "Mike Kelley" },
  { src: "/Assets-3/imagenes/minimalista5.png", author: "Dennis Gilbert" },
  { src: "/Assets-3/imagenes/minimalista6.png", author: "Julius Shulman" },
  { src: "/Assets-3/imagenes/minimalista7.png", author: "Dennis Gilbert" },
  { src: "/Assets-3/imagenes/minimalista8.png", author: "Mike Kelley" },
  { src: "/Assets-3/imagenes/minimalista9.png", author: "Norman McGrath" },
  { src: "/Assets-3/imagenes/minimalista10.png", author: "Fernando Guerra" },
  { src: "/Assets-3/imagenes/minimalista11.png", author: "Julius Shulman" },
  { src: "/Assets-3/imagenes/minimalista12.png", author: "Dennis Gilbert" },
  { src: "/Assets-3/imagenes/minimalista13.png", author: "Mike Kelley" },
  { src: "/Assets-3/imagenes/minimalista14.png", author: "Fernando Guerra" },
  { src: "/Assets-3/imagenes/minimalista15.png", author: "Norman McGrath" },
  { src: "/Assets-3/imagenes/minimalista16.png", author: "Julius Shulman" },
  { src: "/Assets-3/imagenes/minimalista17.png", author: "Dennis Gilbert" },
  { src: "/Assets-3/imagenes/minimalista18.png", author: "Fernando Guerra" },
  { src: "/Assets-3/imagenes/minimalista19.png", author: "Mike Kelley" },
  { src: "/Assets-3/imagenes/minimalista20.png", author: "Mike Kelley" },
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

