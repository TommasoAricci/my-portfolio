import React from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Tabs from '../components/Tabs';
import Title from '../components/Title';
import '../style/pages/Contact.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faPhone,
  faEnvelope,
  faLocationDot,
  faLanguage,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../store';
import Tooltip from '@mui/material/Tooltip';

export default function Contacts() {
  const [activeTab, setActiveTab] = useState('info');
  const email = 'ariccitommaso@hotmail.com';
  const phone = '+39 3516729510';
  const githubUrl = 'https://github.com/TommasoAricci';
  const linkedinUrl = 'https://www.linkedin.com/in/tommaso-aricci-ba545a11b/';
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const whatsapp = 'https://wa.me/+61474591535';

  const handleCopy = (field) => {
    if (field === 'email') {
      navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      });
    } else if (field === 'phone') {
      navigator.clipboard.writeText(phone).then(() => {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      });
    }
  };

  const { language } = useStore();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <>
            <div className="aboutDescription info">
              <div className="info-to-copy">
                <p>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  {email}
                </p>
                <Tooltip title={emailCopied ? 'Copied' : 'Copy'} placement="top" arrow>
                  <FontAwesomeIcon
                    className="icon"
                    icon={emailCopied ? faCheck : faCopy}
                    onClick={() => handleCopy('email')}
                  />
                </Tooltip>
              </div>
              <div className="info-to-copy">
                <p>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  {phone}
                </p>
                <Tooltip title={phoneCopied ? 'Copied' : 'Copy'} placement="top" arrow>
                  <FontAwesomeIcon
                    className="icon"
                    icon={phoneCopied ? faCheck : faCopy}
                    onClick={() => handleCopy('phone')}
                  />
                </Tooltip>
              </div>
              <div className="info-to-copy">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  {language === 'IT' ? 'Padova, Italia' : 'Padua, Italy'}
                </p>
              </div>
              <div className="info-to-copy">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLanguage} />
                  </span>
                  {language === 'IT' ? 'Italiano, Inglese B2' : 'Italian, English B2'}
                </p>
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
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-badge">
                  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                  <span>Whatsapp</span>
                </button>
              </a>
            </div>
          </>
        );
      case 'form':
        return <Form />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <NavbarTop />
      <Title title="Contatti" engTitle="Contacts" />
      <div className="contacts"> {renderTabContent()}</div>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        first="info"
        second="form"
        firstIcon={<FontAwesomeIcon icon={faInfoCircle} />}
        secondIcon={<FontAwesomeIcon icon={faEnvelope} />}
        firstText={language === 'IT' ? 'Info' : 'Info'}
        secondText={language === 'IT' ? 'Email' : 'Email'}
      />
    </div>
  );
}
