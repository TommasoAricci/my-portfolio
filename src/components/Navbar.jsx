import React, { useEffect } from 'react';
import '../style/navbar.scss';
import image from '../images/copia.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { useStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { isOpen, setIsOpen, language, setLanguage, theme, setTheme } = useStore();
  const location = useLocation();

  document.documentElement.setAttribute('data-theme', theme ? 'light' : 'dark');

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  return (
    <>
      <div className={isOpen ? 'mainMobile' : 'mainClose'}>
        <img className="image" src={image} alt="" width="200px" />
        <div className="fullName">TOMMASO ARICCI</div>
        <nav>
          <Link to="/about" style={linkStyle}>
            <div className={location.pathname === '/about' ? 'navDiv' : 'navDiv'}>
              <h2>{language === 'IT' ? 'Chi sono' : 'About me'}</h2>
            </div>
          </Link>
          <Link to="/skills" style={linkStyle}>
            <div className={location.pathname === '/skills' ? 'navDiv' : 'navDiv'}>
              <h2>{language === 'IT' ? 'Abilità' : 'Skills'}</h2>
            </div>
          </Link>
          <Link to="/work" style={linkStyle}>
            <div className={location.pathname === '/work' ? 'navDiv' : 'navDiv'}>
              <h2>{language === 'IT' ? 'Esperienza' : 'Experience'}</h2>
            </div>
          </Link>
          <Link to="/projects" style={linkStyle}>
            <div className={location.pathname === '/projects' ? 'navDiv' : 'navDiv'}>
              <h2>{language === 'IT' ? 'Progetti' : 'Projects'}</h2>
            </div>
          </Link>
          <Link to="/contacts" style={linkStyle}>
            <div className={location.pathname === '/contacts' ? 'navDiv' : 'navDiv'}>
              <h2>{language === 'IT' ? 'Contatti' : 'Contacts'}</h2>
            </div>
          </Link>
        </nav>
      </div>

      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <>
          <button onClick={() => setLanguage(language === 'EN' ? 'IT' : 'EN')} className="translator">
            <FontAwesomeIcon icon={faGlobe} /> {language === 'EN' ? 'IT' : 'EN'}
          </button>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="theme-mobile">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </>
      )}
    </>
  );
}
