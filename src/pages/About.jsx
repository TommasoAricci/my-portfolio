import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import Tabs from '../components/Tabs';
import me from '../images/copia.jpg';
import coding from '../images/coding.png';
import search from '../images/search.png';
import climb from '../images/climb.png';
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
              <img src={me} alt="" />
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
            <div className="aboutDescription profile">
              <img src={coding} alt="" />
              <div>
                <h2>{language === 'IT' ? 'Perchè Web Developer?' : 'Why Web Developer?'}</h2>
                <p>{aboutTexts.whyText[language]}</p>
              </div>
            </div>

            <div className="aboutDescription profile">
              <div>
                <h2>{language === 'IT' ? 'Cosa sto cercando?' : 'What am I looking for?'}</h2>
                <p>{aboutTexts.purposeText[language]}</p>
              </div>
              <img src={search} alt="" />
            </div>
          </>
        );
      case 'passions':
        return (
          <>
            <div className="aboutDescription profile">
              <img src={climb} alt=""></img>
              <div>
                <h2>{language === 'IT' ? 'Cosa mi appassiona?' : 'What do I love?'}</h2>
                <p>{aboutTexts.passionText[language]}</p>
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
