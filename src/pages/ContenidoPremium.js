import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Video from '../components/Video';
import './App.css';
import Home from './Home';
import News from './News';
import Login from './Login';
import Concurso from './Concurso';

const ContenidoPremium = () => {
  const advancedPhotographyVideos = [
    { id: "sRaLFATjSlc", description: "Entrevista con un experto en fotografía de vida salvaje, discutiendo técnicas y experiencias." },
    { id: "z03qvzKMwg4", description: "Tutorial avanzado de fotografía 2" },
    { id: "r8T0o3prTaM", description: "Tutorial avanzado de fotografía 3" },
    { id: "BxPrpr0HZXI", description: "Tutorial avanzado de fotografía 4" },
    { id: "orXDK5pPsGk", description: "Tutorial avanzado de fotografía 5" },
    { id: "tsKiqFCQsYQ", description: "Tutorial avanzado de fotografía 6" },
    { id: "hfzzLRRp9ks", description: "Tutorial avanzado de fotografía 7" },
    { id: "eFGcTq328_4", description: "Tutorial avanzado de fotografía 8" },
    { id: "4LWPzoZ320U", description: "Tutorial avanzado de fotografía 9" },
    { id: "A_xZnC8qiKU", description: "Tutorial avanzado de fotografía 10" },

  ];

  const beginnerPhotographyVideos = [
    { id: "7bySeFzhJk8", description: "Tutorial para principiantes 1" },
    { id: "z03qvzKMwg4", description: "Tutorial para principiantes 2" },
    { id: "r8T0o3prTaM", description: "Tutorial para principiantes 3" },
    { id: "BxPrpr0HZXI", description: "Tutorial para principiantes 4" },
    { id: "orXDK5pPsGk", description: "Tutorial para principiantes 5" },
    { id: "tsKiqFCQsYQ", description: "Tutorial para principiantes 6" },
    { id: "7bySeFzhJk8", description: "Tutorial para principiantes 7" },
    { id: "z03qvzKMwg4", description: "Tutorial para principiantes 8" },
    { id: "r8T0o3prTaM", description: "Tutorial para principiantes 9" },
    { id: "BxPrpr0HZXI", description: "Tutorial para principiantes 10" },

 
  ];

  return (
    <div>
      <h1>Contenido Premium</h1>

      <h2>Entrevistas</h2>
      <div className="video-grid">
        {advancedPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>

      <h2>Tutoriales</h2>
      <div className="video-grid">
        {beginnerPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default ContenidoPremium;
