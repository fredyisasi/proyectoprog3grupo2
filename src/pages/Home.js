import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import './App.css';
import './ArticleList.css';
import { FiArrowRight } from "react-icons/fi";
import Video from '../components/Video';

function Home() {
  return (
    <div>
      
      <div>
     
      <div>
       
        <div className="home-text-section">
          <h1 className="primary-heading">
            Lo ultimo en Articulos de fotografia
          </h1>
          <p className="primary-text">
            Todo en Articulos de fotografia en 
            general la mejora tu técnica y podras ver 
            la mejor perspectiva fotografica de los expertos.
          </p>
          
        </div>
      
    </div>
    </div>
    <div className="article-list"> 
      <div className="article-card">
          <img src="/assets/images/article1.png" alt="Article 1" />
          <div className="article-content">
          <Link to="/Articleshistoria">
          <h2>Fotografía de Paisajes Nocturnos</h2>
          </Link>
            <p>La fotografía de paisajes nocturnos es un campo fascinante...</p>
          </div>
      </div>

      <div className="article-card">
          <img src="/assets/images/article2.png" alt="Article 2" />
          <div className="article-content">
          <Link to="/Articleshistoria">
          <h2>Artículo 2: Retratos de Alta Velocidad </h2>
          </Link>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
          </div>
      </div>
     
  </div>
    <div className="home-text-section">
    <button className="secondary-button"><Link to="/Articleshistoria" style={{ textDecoration: 'none', color: 'inherit' }}>
             Más Articulos <br/><FiArrowRight />
          </Link></button>
          <p className="primary-text">
            Aca arriba
          </p>
    </div>
   
    <div>
     
     <div>
      
       <div className="home-text-section">
         <h1 className="primary-heading">
           Los mejores Tutoriales de Fotografia
         </h1>
         <p className="primary-text">
           Los mejores Tutoriales de fotografia
           para hacer tu potencial como fotografo
           profesional en cualquier entorno.<br/>
         </p>
         
       </div>
       </div>
   </div>
   <div>
      <h1>Curso de FOTOGRAFÍA BÁSICA : ISO, APERTURA Y VELOCIDAD </h1>
      <div className='video-container'>
      <Video videoId="7bySeFzhJk8" /> {/* Reemplaza con el ID de tu video */}
      </div>
      <div className="home-text-section">
         <button className="secondary-button"><Link to="/Tutorials" style={{ textDecoration: 'none', color: 'inherit' }}>
            Más Tutoriales <br/><FiArrowRight />
         </Link></button>
         <p className="primary-text">
           Aca arriba
         </p>
         </div>
    </div>

    
    <div>
     
     <div>
      
       <div className="home-text-section">
         <h1 className="primary-heading">
           Lo ultimo en noticias de fotografia
         </h1>
         <p className="primary-text">
           Todo en noticias de fotografia en 
           general la mejora tu técnica y podras ver 
           la mejor perspectiva fotografica de los expertos.
         </p>
         
       </div>
     
   </div>
   </div>
   <div >
      <h1>Noticias de Eventos Fotograficos</h1>
        
        <div className="article-list"> 
            <div className="article-card">
                <img src="/assets/images/noticia1.png" alt="Noticia 1" />
                <div className="article-content">
                <Link to="/News">
                <h2>Ganadores Sony World Photography Awards y evento 2024</h2>
                </Link>
                  <p>Ayer se ha celebrado la gala de entrega de premios de los Sony World Photography Awards...</p>
                </div>
            </div>
            <div className="article-card">
                <img src="/assets/images/noticia2.png" alt="Noticia 2" />
                <div className="article-content">
                <Link to="/News">
                <h2>Últimos días para enviar tus fotos y vídeos al Red Bull Illume</h2>
                </Link>
                  <p>Los fotógrafos y videógrafos de deportes de aventura y acción pueden participar...</p>
                </div>
            </div>
        </div>
      
        
      </div>
   <div className="home-text-section">
   <button className="secondary-button"><Link to="/News" style={{ textDecoration: 'none', color: 'inherit' }}>
            Más Noticias <br/><FiArrowRight />
         </Link></button>
         <p className="primary-text">
           Aca arriba
         </p>
   </div>

    </div>
  );
}


export default Home;
