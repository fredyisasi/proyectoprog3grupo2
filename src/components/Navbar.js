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
        <li><a href="/podcast">PODCAST</a></li>
        <li><a href="/articulos">ARTÍCULOS</a></li>
        <li><a href="/acerca">ACERCA DE</a></li>
        <li><a href="/contacto">CONTACTO</a></li>
        <li><a href="/acerca">ACERCA DE</a></li>
        <li><a href="/contacto">CONTACTO</a></li>
       
        
      </ul>
      <div className="navbar-user">
      <i className="fas fa-user-circle"></i> {/* Icono de usuario */}
        <a href="/Login" className="navbar-login">Registrarse</a>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>
    </nav>
  );
};

export default Navbar;



