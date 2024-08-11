import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

function Galeria() {
  return (
    <div >
<div >
<h1>TEMAS FOTOGRAFICOS</h1>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/Assets-2/imagenes/portada1.png" alt="portada 1" />
          <div className="article-content">
          <Link to="/GaleriaArqui">
          <h2>GALERIA DE ARQUITECTURA</h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/portada3.png" alt="portada 3" />
          <div className="article-content">
          <Link to="/GaleriaPaisa">
          <h2>GALERIA DE PAISAJES</h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/portada2.png" alt="portada 2" />
          <div className="article-content">
          <Link to="/GaleriaCultural">
          <h2>GALERIA DE RETRATO CULTURALES</h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/portada5.png" alt="portada 5" />
          <div className="article-content">
          <Link to="/GaleriaSilves">
          <h2>GALERIA DE VIDA SILVESTRE</h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/portada4.png" alt="portada 4" />
          <div className="article-content">
          <Link to="/GaleriaBlack">
          <h2>GALERIA DE BLANCO Y NEGRO </h2>
          </Link>
          </div>
      </div>
  </div>
  <h1>ESTILOS FOTOGRAFICOS </h1>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/Assets-2/imagenes/Portada6.png" alt="Portada 6" />
          <div className="article-content">
          <Link to="/GaleriaArqui">
          <h2>ESTILO VITAGE </h2>
          </Link>
          </div>
      </div>

      <div className="article-card">
      <img src="/Assets-2/imagenes/Portada7.png" alt="Portada 7" />
          <div className="article-content">
          <Link to="/GaleriaBlack">
          <h2>ESTILO MINIMALISTA </h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/Portada8.png" alt="Portada 8" />
          <div className="article-content">
          <Link to="/GaleriaCultural">
          <h2>ESTILO MACRO</h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/Portada9.png" alt="Portada 9" />
          <div className="article-content">
          <Link to="/GaleriaPaisa">
          <h2>ESTILO NATURALEZA </h2>
          </Link>
          </div>
      </div>
      <div className="article-card">
      <img src="/Assets-2/imagenes/Portada10.png" alt="Portada 10" />
          <div className="article-content">
          <Link to="/GaleriaSilves">
          <h2>ESTILO PANORAMICO </h2>
          </Link>
          </div>
      </div>
  </div>
</div>
    </div>

    
    
    
  );
}

export default Galeria;
