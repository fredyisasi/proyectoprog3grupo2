import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';


const images = [
  "/Assets-3/imagenes/paisaje1.png",
  "/Assets-3/imagenes/paisaje2.png",
  "/Assets-3/imagenes/paisaje3.png",
  "/Assets-3/imagenes/paisaje4.png",
  "/Assets-3/imagenes/paisaje5.png",
  "/Assets-3/imagenes/paisaje6.png",
  "/Assets-3/imagenes/paisaje7.png",
  "/Assets-3/imagenes/paisaje8.png",
  "/Assets-3/imagenes/paisaje9.png",
  "/Assets-3/imagenes/paisaje10.png",
  "/Assets-3/imagenes/paisaje11.png",
  "/Assets-3/imagenes/paisaje12.png",
  "/Assets-3/imagenes/paisaje13.png",
  "/Assets-3/imagenes/paisaje14.png",
  "/Assets-3/imagenes/paisaje15.png",
  "/Assets-3/imagenes/paisaje16.png",
  "/Assets-3/imagenes/paisaje17.png",
  "/Assets-3/imagenes/paisaje18.png",
  "/Assets-3/imagenes/paisaje19.png",
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

