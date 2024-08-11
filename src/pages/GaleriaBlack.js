import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';


const images = [
  "/Assets-3/imagenes/black1.png",
  "/Assets-3/imagenes/black2.png",
  "/Assets-3/imagenes/black3.png",
  "/Assets-3/imagenes/black4.png",
  "/Assets-3/imagenes/black5.png",
  "/Assets-3/imagenes/black6.png",
  "/Assets-3/imagenes/black7.png",
  "/Assets-3/imagenes/black8.png",
  "/Assets-3/imagenes/black9.png",
  "/Assets-3/imagenes/black10.png",
  "/Assets-3/imagenes/black11.png",
  "/Assets-3/imagenes/black12.png",
  "/Assets-3/imagenes/black13.png",
  "/Assets-3/imagenes/black14.png",
  "/Assets-3/imagenes/black15.png",
  "/Assets-3/imagenes/black16.png",
  "/Assets-3/imagenes/black17.png",
  "/Assets-3/imagenes/black18.png",
  "/Assets-3/imagenes/black19.png",
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

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery Image ${index + 1}`} onClick={() => openModal(index)} />
        </div>
      ))}
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <button className="prev-button" onClick={prevImage}>‹</button>
            <img src={images[currentImageIndex]} alt={`Gallery Image ${currentImageIndex + 1}`} className="modal-image" />
            <button className="next-button" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaArqui;

