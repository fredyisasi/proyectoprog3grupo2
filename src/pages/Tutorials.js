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

const Tutorials = () => {
  const advancedPhotographyVideos = [
    { id: "7bySeFzhJk8", description: "Tutorial avanzado de fotografía 1" },
    { id: "z03qvzKMwg4", description: "Tutorial avanzado de fotografía 2" },
    { id: "r8T0o3prTaM", description: "Tutorial avanzado de fotografía 3" },
    { id: "BxPrpr0HZXI", description: "Tutorial avanzado de fotografía 4" },
    { id: "orXDK5pPsGk", description: "Tutorial avanzado de fotografía 5" },
    { id: "tsKiqFCQsYQ", description: "Tutorial avanzado de fotografía 6" },
    { id: "hfzzLRRp9ks", description: "Tutorial avanzado de fotografía 7" },
    { id: "eFGcTq328_4", description: "Tutorial avanzado de fotografía 8" },
    { id: "4LWPzoZ320U", description: "Tutorial avanzado de fotografía 9" },
    { id: "A_xZnC8qiKU", description: "Tutorial avanzado de fotografía 10" },
    { id: "cgHWihjOQ7g", description: "Tutorial avanzado de fotografía 11" },
    { id: "xkFnhsEDjUk", description: "Tutorial avanzado de fotografía 12" },
    { id: "6bZUluUyRA4", description: "Tutorial avanzado de fotografía 13" },
    { id: "uHB5pRLfsIY", description: "Tutorial avanzado de fotografía 14" },
    { id: "ugWf_6cXrok", description: "Tutorial avvation de fotografía 15" },
    { id: "5Pw1feetV7c", description: "Tutorial avanzado de fotografía 16" },
    { id: "w3EsdgPl3wM", description: "Tutorial avanzado de fotografía 17" },
    { id: "dlE6G09QwMk", description: "Tutorial avanzado de fotografía 18" },
    { id: "yeOn8H_g4Z0", description: "Tutorial avanzado de fotografía 19" },
    { id: "02k_rTuVGiM", description: "Tutorial avanzado de fotografía 20" },
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
    { id: "orXDK5pPsGk", description: "Tutorial para principiantes 11" },
    { id: "tsKiqFCQsYQ", description: "Tutorial para principiantes 12" },
    { id: "tsKiqFCQsYQ", description: "Tutorial para principiantes 13" },
    { id: "7bySeFzhJk8", description: "Tutorial para principiantes 14" },
    { id: "z03qvzKMwg4", description: "Tutorial para principiantes 15" },
    { id: "r8T0o3prTaM", description: "Tutorial para principiantes 16" },
    { id: "BxPrpr0HZXI", description: "Tutorial para principiantes 17" },
    { id: "orXDK5pPsGk", description: "Tutorial para principiantes 18" },
    { id: "tsKiqFCQsYQ", description: "Tutorial para principiantes 19" },
    { id: "tsKiqFCQsYQ", description: "Tutorial para principiantes 20" },
 
  ];

  return (
    <div>
      <h1>Tutoriales de Fotografía</h1>

      <h2>Fotografía Avanzada</h2>
      <div className="video-grid">
        {advancedPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>

      <h2>Fotografía para Principiantes</h2>
      <div className="video-grid">
        {beginnerPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
