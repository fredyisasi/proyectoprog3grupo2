import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'; // Asegúrate de importar el archivo CSS para los estilos
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para el dropdown
  const { isAuthenticated, user } = useAuth0(); // Auth0 hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
        <li><a href="/entrevista">ENTREVISTA</a></li>
        <li><a href="/contacto">CONTACTO</a></li>
      </ul>
      <div className="navbar-user" onClick={toggleDropdown}>
        <i className="fas fa-user-circle"></i>
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
    </nav>
  );
};

export default Navbar;

