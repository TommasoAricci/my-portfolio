import React from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Tabs from '../components/Tabs';
import Title from '../components/Title';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCopy, faCheck, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../store';

export default function Contacts() {
  const [activeTab, setActiveTab] = useState('form');
  const email = 'ariccitommaso@hotmail.com';
  const phone = '+39 3516729510';
  const githubUrl = 'https://github.com/TommasoAricci';
  const linkedinUrl = 'https://www.linkedin.com/in/tommaso-aricci-ba545a11b/';
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
  const whatsapp = 'https://wa.me/+61474591535 ';

  const handleCopy = (field) => {
    if (field === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else if (field === 'phone') {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const { language } = useStore();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'form':
        return <Form />;
      case 'info':
        return (
          <div className="contacts">
            <div className="first-div">
              <div className="aboutDescription info">
                <h2 style={{ color: '#ffd700' }}>{language === 'IT' ? 'Info utili' : 'Useful Infos'}</h2>
                <div className="info-to-copy">
                  <p>
                    <span>{emailIcon}</span>
                    {email}
                  </p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={emailCopied ? faCheck : faCopy}
                    onClick={() => handleCopy('email')}
                  />
                </div>
                <div className="info-to-copy">
                  <p>
                    <span>{phoneIcon}</span>
                    {phone}
                  </p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={phoneCopied ? faCheck : faCopy}
                    onClick={() => handleCopy('phone')}
                  />
                </div>
                <div className="info-to-copy">
                  <p>
                    <span>{whatsappIcon}</span>
                    <a
                      style={{ marginRight: '10px', fontWeight: 'bold', color: '#ffd700', textDecoration: 'none' }}
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === 'IT' ? 'Scrivimi su Whatsapp' : 'Text me on WhatsApp'}
                    </a>
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
              </div>
            </div>
          </div>
        );
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
        first="form"
        second="info"
        firstIcon={<FontAwesomeIcon icon={faBriefcase} />}
        secondIcon={<FontAwesomeIcon icon={faBriefcase} />}
        firstText={language === 'IT' ? 'Form' : 'Form'}
        secondText={language === 'IT' ? 'Info' : 'Info'}
      />
    </div>
  );
}
