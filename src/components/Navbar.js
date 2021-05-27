import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class='fab fa-typo3' />
            SERTIFIKASIKU
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/produk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produk
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/acara'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Acara
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prakerja'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pra Kerja
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/artikel'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Artikel
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FaShoppingCart/>
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Masuk</Button>}
          {button && <Button buttonStyle='btn--outline'>Daftar</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
