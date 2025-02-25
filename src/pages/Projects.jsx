import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import '../style/Tabs.scss';
import '../style/pages/Projects.scss';
import Project from '../components/Project';
import greenway from '../images/projects/greenway.png';
import bookfinder from '../images/projects/bookfinder.png';
import cafequiz from '../images/projects/cafequiz.png';
import counter from '../images/projects/counter.png';
import { texts } from '../texts';
import { useStore } from '../store';

export default function Projects() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <div className="projects-list">
              <div>
                <Project
                  className="anchor"
                  src={greenway}
                  title="Greenway"
                  link="https://veg-recipes-founder.netlify.app/"
                  git="https://github.com/TommasoAricci/veg-recipes-founder"
                  text={texts.Greenway[language]}
                />
              </div>
              <Project
                src={bookfinder}
                title="Bookfinder"
                link="https://tommasoaricci-bookfinder.netlify.app/"
                git="https://github.com/TommasoAricci/theBookFinder"
                text={texts.Bookfinder[language]}
              />
              <Project
                src={cafequiz}
                title="Cafequiz"
                link="https://tommasoaricci.github.io/quiz-app/"
                git="https://github.com/TommasoAricci/quiz-app"
              />
              <Project
                src={counter}
                title="Counter"
                link="https://tommasoaricci.github.io/javascript-counter/"
                git="https://github.com/TommasoAricci/javascript-counter"
              />
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
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <NavbarTop />
      <Title title="Progetti" engTitle="Projects" />
      <div className="projects"> {renderTabContent()}</div>
    </>
  );
}
