import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('home');

  const handleViewMenu = () => {
    setMenu('menu');
    navigate('/menu'); 
  };

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose your favourite order from here with the minimum cost as well as minimum discount</p>
        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
