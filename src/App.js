// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Articleshistoria from './pages/Articleshistoria';
import Concurso from './pages/Concurso';
import Galeria from './pages/Galeria';
import Tutorials from './pages/Tutorials';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ArticleDetail from './pages/ArticleDetail';
import ArticleDetail2 from './pages/ArticleDetail2';
import Newsdetail from './pages/Newsdetail';
import Newsdetails2 from './pages/Newsdetails2';
import Newsdetails3 from './pages/Newsdetails3';
import Newsdetails4 from './pages/Newsdetails4';
import Detalles from './pages/Detalles';
import ConcursoDetail from './pages/ConcursoDetail';
import GaleriaArqui from './pages/GaleriaArqui';
import GaleriaBlack from './pages/GaleriaBlack';
import GaleriaSilves from './pages/GaleriaSilves';
import GaleriaPaisa from './pages/GaleriaPaisa';
import GaleriaCultural from './pages/GaleriaCultural';
import EstiloMinimista from './pages/EstiloMinimista';
import EstiloVintage from './pages/EstiloVintage';
import EstiloPanoramico from './pages/EstiloPanoramico';
import EstiloMacro from './pages/EstiloMacro';
import EstiloNaturaleza from './pages/EstiloNaturaleza';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import ContenidoPremium from './pages/ContenidoPremium';
import ReseñasDeEquipo from './pages/ReseñasDeEquipo';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/Articleshistoria" element={<Articleshistoria />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/ArticleDetail" element={<ArticleDetail />} />
        <Route path="/ArticleDetail2" element={<ArticleDetail2 />} />
        <Route path="/Newsdetail" element={<Newsdetail />} />
        <Route path="/Newsdetails2" element={<Newsdetails2 />} />
        <Route path="/Newsdetails3" element={<Newsdetails3 />} />
        <Route path="/Newsdetails4" element={<Newsdetails4 />} />
        <Route path="/ConcursoDetail" element={<ConcursoDetail />} />
        <Route path="/Detalles" element={<Detalles />} />
        <Route path="/GaleriaArqui" element={<GaleriaArqui />} />
        <Route path="/GaleriaBlack" element={<GaleriaBlack />} />
        <Route path="/GaleriaCultural" element={<GaleriaCultural />} />
        <Route path="/GaleriaPaisa" element={<GaleriaPaisa />} />
        <Route path="/GaleriaSilves" element={<GaleriaSilves />} />
        <Route path="/EstiloMinimista" element={<EstiloMinimista/>} />
        <Route path="/EstiloVintage" element={<EstiloVintage/>} />
        <Route path="/EstiloMacro" element={<EstiloMacro/>} />
        <Route path="/EstiloPanoramico" element={<EstiloPanoramico/>} />
        <Route path="/EstiloNaturaleza" element={<EstiloNaturaleza/>} />
        <Route path="/Concurso" element={<Concurso />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/ContenidoPremium" element={<ContenidoPremium />} />
        <Route path="/ReseñasDeEquipo" element={<ReseñasDeEquipo />} />


      </Routes>
      <Footer />
    </div>
  );
};

export default App;
