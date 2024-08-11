import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

function News() {
  return (
    <div >
      <div >
      <h1>Noticias de Eventos Fotograficos</h1>
        
        <div className="article-list"> 
            <div className="article-card">
                <img src="/assets/images/noticia1.png" alt="Noticia 1" />
                <div className="article-content">
                <Link to="/Newsdetail">
                <h2>Ganadores Sony World Photography Awards y evento 2024</h2>
                </Link>
                  <p>Ayer se ha celebrado la gala de entrega de premios de los Sony World Photography Awards...</p>
                </div>
            </div>
            <div className="article-card">
                <img src="/assets/images/noticia2.png" alt="Noticia 2" />
                <div className="article-content">
                <Link to="/Newsdetail">
                <h2>Últimos días para enviar tus fotos y vídeos al Red Bull Illume</h2>
                </Link>
                  <p>Los fotógrafos y videógrafos de deportes de aventura y acción pueden participar...</p>
                </div>
            </div>
        </div>
      
        
      </div>
      <div >
      <h1>Noticias de Novedades Fotograficas</h1>
        
        <div className="article-list"> 
            <div className="article-card">
                <img src="/assets/images/noticia16.png" alt="Noticia 16" />
                <div className="article-content">
                <Link to="/Newsdetails3">
                <h2>Novedades de audio y vídeo de Adobe</h2>
                </Link>
                  <p>Adobe ha anunciado nuevas e importantes actualizaciones de audio y video en sus herramientas de Creative Cloud....</p>
                </div>
            </div>
            <div className="article-card">
                <img src="/assets/images/noticia17.png" alt="Noticia 17" />
                <div className="article-content">
                <Link to="/Newsdetails3">
                <h2>Presentación de PETRICOR un nuevo libro de fotografía</h2>
                </Link>
                  <p>El 13 de Mayo, a las 20 horas, se presenta en el Auditorio de La Lonja de Orihuela, un libro de fotografía...</p>
                </div>
            </div>
        </div>
      
        
      </div>
    </div>

    
    
    
  );
}

export default News;
