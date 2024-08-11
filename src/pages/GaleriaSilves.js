import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';


const images = [
  "/Assets-3/imagenes/silvestre1.png",
  "/Assets-3/imagenes/silvestre2.png",
  "/Assets-3/imagenes/silvestre3.png",
  "/Assets-3/imagenes/silvestre4.png",
  "/Assets-3/imagenes/silvestre5.png",
  "/Assets-3/imagenes/silvestre6.png",
  "/Assets-3/imagenes/silvestre7.png",
  "/Assets-3/imagenes/silvestre8.png",
  "/Assets-3/imagenes/silvestre9.png",
  "/Assets-3/imagenes/silvestre10.png",
  "/Assets-3/imagenes/silvestre11.png",
  "/Assets-3/imagenes/silvestre12.png",
  "/Assets-3/imagenes/silvestre13.png",
  "/Assets-3/imagenes/silvestre14.png",
  "/Assets-3/imagenes/silvestre15.png",
  "/Assets-3/imagenes/silvestre16.png",
  "/Assets-3/imagenes/silvestre17.png",
  "/Assets-3/imagenes/silvestre18.png",
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

