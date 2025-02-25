import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import '../style/Tabs.scss';
import Tabs from '../components/Tabs';
import { useStore } from '../store';
import { texts } from '../texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Form from '../components/Form';

export default function AboutMe() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('about');
  const email = 'ariccitommaso@hotmail.com';
  const phone = '+39 3516729510';
  const githubUrl = 'https://github.com/TommasoAricci';
  const linkedinUrl = 'https://www.linkedin.com/in/tommaso-aricci-ba545a11b/';
  const [copied, setCopied] = useState(false); // Stato per tenere traccia se il testo è stato copiato

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Errore nella copia:', err));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <div className="aboutDescription">
              <h2>{language === 'IT' ? 'Chi è Tommaso?' : 'Who is Tommaso?'}</h2>
              <p>{texts.aboutText[language]}</p>
            </div>

            <div className="aboutDescription">
              <h2>{language === 'IT' ? 'Perchè Web Developer' : 'Why Web Developer'}</h2>
              <p>{texts.whyText[language]}</p>
            </div>
          </>
        );
      case 'info':
        return (
          <>
            <div className="aboutDescription">
              <h2>Info</h2>
              <p>Descrizione del tab "about".</p>
            </div>
          </>
        );
      case 'contacts':
        return (
          <>
            <div className="contacts">
              <div className="first-div">
                <div className="aboutDescription info">
                  <h2 style={{ color: '#ffd700' }}>Info utili</h2>
                  <div className="info-to-copy">
                    <p>
                      <span>Email</span>
                      {email}
                    </p>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCopy} // Cambia l'icona
                      onClick={() => handleCopy(email)}
                    />
                  </div>
                  <div className="info-to-copy">
                    <p>
                      <span>Phone</span>
                      {phone}
                    </p>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCopy} // Cambia l'icona
                      onClick={() => handleCopy(phone)}
                    />
                  </div>
                </div>
                <div className="badge">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <button className="github-badge">
                      <FontAwesomeIcon icon={faGithub} className="github-icon" />
                      <span>GitHub</span>
                    </button>
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <button className="linkedin-badge">
                      <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                      <span>LinkedIn</span>
                    </button>
                  </a>
                </div>
              </div>
              <Form />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <NavbarTop />
      <Title title="Chi sono" engTitle="Who am I" />

      <div className="content">{renderTabContent()}</div>

      {copied && (
        <div className="copied">
          <FontAwesomeIcon icon={faCheck} /> Copied!
        </div>
      )}

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} first="about" second="info" third="contacts" />
    </>
  );
}
