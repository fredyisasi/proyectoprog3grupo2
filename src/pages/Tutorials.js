import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Video from '../components/Video';
import './App.css';
import Home from './Home';
import News from './News';
import Login from './Login';


const Tutorials = () => {
  return (
    <div>
<h1>Curso de FOTOGRAFÍA BÁSICA : ISO, APERTURA Y VELOCIDAD </h1>
    <div>
      
      <div className='video-container'>
      <Video videoId="7bySeFzhJk8" /> {/* Reemplaza con el ID de tu video */}
      </div>
      </div>
    </div>
  );
};

export default Tutorials;
