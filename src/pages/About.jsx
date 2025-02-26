import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import Tabs from '../components/Tabs';
import { useStore } from '../store';
import { aboutTexts } from '../texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck, faUser, faEnvelope, faHeart, faPhone, faCircleInfo, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Form from '../components/Form';

export default function AboutMe() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('about');
  const email = 'ariccitommaso@hotmail.com';
  const phone = '+39 3516729510';
  const githubUrl = 'https://github.com/TommasoAricci';
  const linkedinUrl = 'https://www.linkedin.com/in/tommaso-aricci-ba545a11b/';
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const contactsIcon = <FontAwesomeIcon icon={faCircleInfo} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;
  const rocketIcon = <FontAwesomeIcon icon={faRocket} />;
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

  console.log(phoneCopied);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <div className="aboutMe">
              <div className="aboutDescription">
                <h2>{language === 'IT' ? 'Chi è Tommaso?' : 'Who is Tommaso?'}</h2>
                <p>{aboutTexts.aboutText[language]}</p>
              </div>

              <div className="aboutDescription">
                <h2>{language === 'IT' ? 'Perchè Web Developer' : 'Why Web Developer'}</h2>
                <p>{aboutTexts.whyText[language]}</p>
              </div>

              <div className="aboutDescription">
                <h2>{language === 'IT' ? 'Perchè Web Developer' : 'Why Web Developer'}</h2>
                <p>{aboutTexts.whyText[language]}</p>
              </div>
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

      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        first="about"
        second="info"
        third="purpose"
        four="contacts"
        firstIcon={userIcon}
        secondIcon={rocketIcon}
        thirdIcon={heartIcon}
        fourIcon={contactsIcon}
        firstText={language === 'IT' ? 'Info su di me' : 'My info'}
        secondText={language === 'IT' ? 'Il mio perché' : 'My why'}
        thirdText={language === 'IT' ? 'Cosa mi appassiona' : 'What I love'}
        fourText={language === 'IT' ? 'Info utili' : 'Useful Infos'}
      />
    </>
  );
}
