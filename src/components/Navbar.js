// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Asegúrate de importar el archivo CSS para los estilos
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">SH MAGAZINE</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">INICIO</a></li>
        <li><a href="/news">NOTICIAS</a></li>
        <li><a href="/tutorials">TUTORIALES</a></li>
        <li><a href="/Articleshistoria">ARTÍCULOS</a></li>
        <li><a href="/concurso">CONCURSO</a></li>
        <li><a href="/galeria">GALERIA</a></li>
        <li><a href="/ContenidoPremium">CONTENIDO PREMIUM</a></li>
        <li><a href="/ReseñasDeEquipo">RESEÑAS DE EQUIPO</a></li>
        <li><a href="/preguntasfrecuentes">PREGUNTAS FRECUENTES</a></li>
        
       
        
      </ul>
      <div className="navbar-user">
      <i className="fas fa-user-circle"></i> {/* Icono de usuario */}
        <a href="/Login" className="navbar-login">Login</a>
        <a href="/Logout" className="navbar-login">Logout</a>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>
    </nav>
  );
};

export default Navbar;



