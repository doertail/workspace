import React from 'react';
import '../assets/css/Header.css';
import { useNavigate } from 'react-router-dom';



function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('#contact');
  };


  return (
    <header className="header">
        <div>
            <h2 className="brand-text">SmartMD</h2>
        </div>
        <div>
            <h1 className="header-text">Makes Your Best <br/>MD Experience</h1>
        </div>
        <div>
          <button onClick={handleClick} className="header-button">Try for free</button>
        </div>
      </header>

  );
}

    
export default Header;

