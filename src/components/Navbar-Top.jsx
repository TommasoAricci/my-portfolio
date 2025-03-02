import '../style/navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useStore();
  const location = useLocation();

  document.documentElement.setAttribute('data-theme', theme);

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <>
      <nav className={'mainLaptop'}>
        <div className="fullName">TOMMASO ARICCI</div>
        <Link to="/about" style={linkStyle}>
          <div className={location.pathname === '/about' || location.pathname === '/' ? 'navDiv active' : 'navDiv'}>
            <h2>{language === 'IT' ? 'Chi sono' : 'About me'}</h2>
          </div>
        </Link>
        <Link to="/skills" style={linkStyle}>
          <div className={location.pathname === '/skills' ? 'navDiv active' : 'navDiv'}>
            <h2>{language === 'IT' ? 'Abilità' : 'Skills'}</h2>
          </div>
        </Link>
        <Link to="/work" style={linkStyle}>
          <div className={location.pathname === '/work' ? 'navDiv active' : 'navDiv'}>
            <h2>{language === 'IT' ? 'Esperienza' : 'Experience'}</h2>
          </div>
        </Link>
        <Link to="/projects" style={linkStyle}>
          <div className={location.pathname === '/projects' ? 'navDiv active' : 'navDiv'}>
            <h2>{language === 'IT' ? 'Progetti' : 'Projects'}</h2>
          </div>
        </Link>
        <Link to="/contacts" style={linkStyle}>
          <div className={location.pathname === '/contacts' ? 'navDiv active' : 'navDiv'}>
            <h2>{language === 'IT' ? 'Contatti' : 'Contacts'}</h2>
          </div>
        </Link>
        <div className="tools">
          <button onClick={() => setLanguage(language === 'EN' ? 'IT' : 'EN')} className="translator-laptop">
            <FontAwesomeIcon icon={faGlobe} /> {language === 'EN' ? 'IT' : 'EN'}
          </button>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="translator-laptop">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>
      </nav>
    </>
  );
}
