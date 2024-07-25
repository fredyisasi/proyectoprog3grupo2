// src/components/Navbar.js
import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

    </div>
  );
};

export default Navbar;