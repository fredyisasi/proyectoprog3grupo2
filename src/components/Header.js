import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const propsH2 = useSpring({ 
    opacity: 1, 
    transform: 'translateY(0)', 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 400,
    config: { duration: 2000 } // Ajusta la duración aquí (2000 ms = 2 segundos)
  });

  const propsH1 = useSpring({ 
    opacity: 1, 
    transform: 'translateY(0)', 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 400,
    config: { duration: 2000 } // Ajusta la duración aquí (2000 ms = 2 segundos)
  });

  return (
    <header className="page-header">
      <animated.h2 style={propsH2}>SOBRE EL HORIZONTE</animated.h2>
      <animated.h1 style={propsH1}>MAGAZINE</animated.h1>
    </header>
  );
};

export default Header;
