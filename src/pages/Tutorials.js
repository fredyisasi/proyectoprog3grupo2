import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Video from '../components/Video';
import './App.css';
import Home from './Home';
import News from './News';
import Login from './Login';

const Tutorials = () => {
  const videoIds = [
    "7bySeFzhJk8", // Reemplaza con tus IDs de video
    "z03qvzKMwg4",
    "7bySeFzhJk8",
    "z03qvzKMwg4",
    "7bySeFzhJk8", // Reemplaza con tus IDs de video
    "z03qvzKMwg4",
    "7bySeFzhJk8",
    "z03qvzKMwg4",
    "7bySeFzhJk8", // Reemplaza con tus IDs de video
    "z03qvzKMwg4",
    "7bySeFzhJk8",
    "z03qvzKMwg4",
  ];

  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Tutoriales de Fotografia Avanzada</h1>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={scrollLeft}>{'<'}</button>
        <div className="video-gallery" ref={galleryRef}>
          {videoIds.map(videoId => (
            <div className="video-container" key={videoId}>
              <Video videoId={videoId} />
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={scrollRight}>{'>'}</button>
      </div>
    </div>
  );
};

export default Tutorials;