import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import Tabs from '../components/Tabs';
import me from '../images/compressed/copia1.webp';
import coding from '../images/compressed/coding.webp';
import search from '../images/compressed/search.webp';
import climb from '../images/compressed/climb.webp';
import { useStore } from '../store';
import { aboutTexts } from '../texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function AboutMe() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('about');
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;
  const rocketIcon = <FontAwesomeIcon icon={faRocket} />;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <div className="aboutDescription profile">
              <img src={me} style={{ borderRadius: '50%' }} loading="eager" alt="" />
              <div>
                <h2>{language === 'IT' ? 'Chi è Tommaso?' : 'Who is Tommaso?'}</h2>
                <p>{aboutTexts.aboutText[language]}</p>
              </div>
            </div>
          </>
        );
      case 'why':
        return (
          <>
            {coding && search && (
              <>
                <div className="both">
                  <div className="aboutDescription profile">
                    <img src={coding} alt="" loading="eager" />
                    <div>
                      <h2>{language === 'IT' ? 'Perchè Web Developer?' : 'Why Web Developer?'}</h2>
                      <p>{aboutTexts.whyText[language]}</p>
                    </div>
                  </div>

                  <div className="aboutDescription profile">
                    <img src={search} alt="" loading="eager" />
                    <div>
                      <h2>{language === 'IT' ? 'Cosa sto cercando?' : 'What am I looking for?'}</h2>
                      <p>{aboutTexts.purposeText[language]}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      case 'passions':
        return (
          <>
            {climb && (
              <div className="aboutDescription profile">
                <img src={climb} alt="" loading="eager" />
                <div>
                  <h2>{language === 'IT' ? 'Cosa mi appassiona?' : 'What do I love?'}</h2>
                  <p>{aboutTexts.passionText[language]}</p>
                </div>
              </div>
            )}
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
        second="why"
        third="passions"
        firstIcon={userIcon}
        secondIcon={rocketIcon}
        thirdIcon={heartIcon}
        firstText={language === 'IT' ? 'Info su di me' : 'My info'}
        secondText={language === 'IT' ? 'Il mio perché' : 'My why'}
        thirdText={language === 'IT' ? 'Cosa mi appassiona' : 'What I love'}
      />
    </>
  );
}
