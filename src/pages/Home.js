import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Home.css';
import Video from '../components/Video';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>MANTENTE AL DÍA EN FOTOGRAFÍA</h1>
          <p>Tu viaje fotográfico comienza aquí</p>
          <button className="primary-button" onClick={toggleDropdown}>
            SUSCRÍBETE AHORA
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {isAuthenticated ? (
                <>
                  <div className="user-info">
                    <img src={user.picture} alt={user.name} className="user-avatar" />
                    <span>{user.name}</span>
                  </div>
                  <LogoutButton />
                </>
              ) : (
                <LoginButton />
              )}
            </div>
          )}
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
  <h2>Novedades y Beneficios por tu Suscripción</h2>
  <div className="services-list">
    <div className="service-item">
      <Link to="/PreguntasFrecuentes">
        <h3>Preguntas Frecuentes</h3>
      </Link>
      <img src="/assets/images/home1.png" alt="Preguntas Frecuentes" className="service-image" />
      <p>Estamos comprometidos a brindarte la mejor experiencia fotográfica</p>
    </div>
    <div className="service-item">
      <Link to="/Concurso">
        <h3>Participar en Concurso de Fotografía</h3>
      </Link>
      <img src="/assets/images/home2.png" alt="Concurso de Fotografía" className="service-image" />
      <p>Acceso a inscripciones a concurso de fotografía y capacitaciones para mejorar tus habilidades</p>
    </div>
    <div className="service-item">
      <Link to="/ReseñasDeEquipo">
        <h3>Las Mejores Reseñas De Equipos</h3>
      </Link>
      <img src="/assets/images/home3.png" alt="Reseñas de Equipos" className="service-image" />
      <p>Reseñas y asesoramiento en toma de decisiones de equipos de alta gama fotográfica</p>
    </div>
    <div className="service-item">
      <Link to="/ContenidoPremium">
        <h3>Acceso a contenido premium</h3>
      </Link>
      <img src="/assets/images/home4.png" alt="Contenido Premium" className="service-image" />
      <p>El mejor contenido de los mejores fotógrafos</p>
    </div>
    <div className="service-item">
      <Link to="/Tutorials">
        <h3>Los mejores tutoriales</h3>
      </Link>
      <img src="/assets/images/home5.png" alt="Tutoriales" className="service-image" />
      <p>Encontrarás los mejores tutoriales para principiantes y fotógrafos avanzados</p>
    </div>
  </div>
</section>

      <h1>Articulos y Noticias</h1>
      {/* Article List */}
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
              <h2>Retratos de Alta Velocidad</h2>
            </Link>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
          </div>
        </div>
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
      


<div className="artcle-list">
  <h1>Galeria</h1>
    <img src="/Assets-3/imagenes/Arquitectura1.png" alt="Photo 1" />
    <img src="/Assets-3/imagenes/black1.png" alt="Photo 2" />
    <img src="/Assets-3/imagenes/Arquitectura2.png" alt="Photo 3" />
    <img src="/Assets-3/imagenes/black2.png" alt="Photo 4" />
    <img src="/Assets-3/imagenes/Arquitectura3.png" alt="Photo 5" />
    <img src="/Assets-3/imagenes/black3.png" alt="Photo 6" />
    <img src="/Assets-3/imagenes/Arquitectura4.png" alt="Photo 7" />
    <img src="/Assets-3/imagenes/black4.png" alt="Photo 8" />
</div>

      <div className="home-text-section">
          <button className="secondary-button">
            <Link to="/Galeria" style={{ textDecoration: 'none', color: 'inherit' }}>
              Ir a la Galeria <br /><FiArrowRight />
            </Link>
          </button>
          <p className="primary-text">
            Aca arriba
          </p>
        </div>

      {/* Video Section */}
      <div>
        <h1>Tutoriales</h1>
        <div className='video-container'>
          <Video videoId="7bySeFzhJk8" /> {/* Reemplaza con el ID de tu video */}
          <Video videoId="tsKiqFCQsYQ" /> 
          <Video videoId="BxPrpr0HZXI" /> 
        </div>
        <div className="home-text-section">
          <button className="secondary-button">
            <Link to="/Tutorials" style={{ textDecoration: 'none', color: 'inherit' }}>
              Más Tutoriales <br /><FiArrowRight />
            </Link>
          </button>
          <p className="primary-text">
            Aca arriba
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default Home;
