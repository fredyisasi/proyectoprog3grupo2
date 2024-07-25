import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-address">
        Revista de Fotografia Poyecto Grupo 2 Lenguaje de Programación 3
      </div>
      <div className="footer-links">
        <a href="/terminos">Términos y Condiciones</a>
        <a href="/privacidad">Política de Privacidad</a>
      </div>
      
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      
      </div>
    </footer>
  );
};

export default Footer;


