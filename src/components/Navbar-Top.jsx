import '../style/navbar.scss';
import image from '../images/copia.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useStore();
  const location = useLocation();

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <>
      <nav className={theme === 'light' ? 'mainLaptop-light' : 'mainLaptop'}>
        <div className="fullName">TOMMASO ARICCI</div>
        <Link to="/about" style={linkStyle}>
          <div className={location.pathname === '/about' ? 'navDiv active' : 'navDiv'}>
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
        <div className="navDiv">
          <h2>{language === 'IT' ? 'Contatti' : 'Contacts'}</h2>
        </div>
        <div className='tools'>
          <button onClick={() => setLanguage(language === 'IT' ? 'EN' : 'IT')} className="translator-laptop">
            <FontAwesomeIcon icon={faGlobe} /> {language}
          </button>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="translator-laptop">
            <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
          </button>
        </div>
      </nav>
    </>
  );
}
