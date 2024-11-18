import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Strona główna</Link></li>
        <li 
          className="dropdown"
          onMouseOver={showDropdown} // Używamy onMouseOver
          onMouseOut={hideDropdown} // i onMouseOut
        >
          <span>Nasze podróże</span>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/our-trips/Bangkog">Bangkog</Link></li>
              <li><Link to="/our-trips/ChangMai">Chang Mai</Link></li>
              <li><Link to="/our-trips/ChangRai">Chang Rai</Link></li>
              <li><Link to="/our-trips/KualaLumpur">Kuala Lumpur</Link></li>
              <li><Link to="/our-trips/Borneo">Borneo</Link></li>
              <li><Link to="/our-trips/KhaoSok">Khao Sok</Link></li>
              <li><Link to="/our-trips/Krabi">Krabi</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/about-us">O nas</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
