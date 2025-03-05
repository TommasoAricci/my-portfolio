import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/About.scss';
import '../style/Tabs.scss';
import '../style/pages/Projects.scss';
import Project from '../components/Project';
import Tabs from '../components/Tabs';
import greenway from '../images/projects/greenway.png';
import bookfinder from '../images/projects/bookfinder.png';
import cafequiz from '../images/projects/cafequiz.png';
import counter from '../images/projects/counter.png';
import interview from '../images/projects/interview.png';
import copy from '../images/projects/copy.png';
import lifetodo from '../images/projects/lifetodo.png';
import { projectTexts } from '../texts';
import { useStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('DEVELOPMENT');
  const web = <FontAwesomeIcon icon={faGlobe} />;
  const link = <FontAwesomeIcon icon={faLink} />;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'DEVELOPMENT':
        return (
          <>
            <div className="projects-list">
              <Project
                src={greenway}
                title="Greenway"
                link="https://veg-recipes-founder.netlify.app/"
                git="https://github.com/TommasoAricci/veg-recipes-founder"
                text={projectTexts.Greenway[language]}
              />
              <Project
                src={bookfinder}
                title="Bookfinder"
                link="https://tommasoaricci-bookfinder.netlify.app/"
                git="https://github.com/TommasoAricci/theBookFinder"
                text={projectTexts.Bookfinder[language]}
              />
              <Project
                src={cafequiz}
                title="Cafequiz"
                link="https://tommasoaricci.github.io/quiz-app/"
                git="https://github.com/TommasoAricci/quiz-app"
                text={projectTexts.Cafequiz[language]}
              />
              <Project
                src={counter}
                title="Counter"
                link="https://tommasoaricci.github.io/javascript-counter/"
                git="https://github.com/TommasoAricci/javascript-counter"
                text={projectTexts.Counter[language]}
              />
              <Project
                src={lifetodo}
                title="Counter"
                link="https://lifetodo-my.netlify.app/"
                git="https://github.com/TommasoAricci/Lifetodo-frontend"
                text={projectTexts.Lifetodo[language]}
                position="right"
              />
            </div>
          </>
        );
      case 'OTHER':
        return (
          <>
            <div className="projects-list">
              <Project
                src={copy}
                title="Copywriting Portfolio"
                link="https://muckrack.com/tommaso-aricci-1"
                text={projectTexts.Copy[language]}
              />
              <Project
                src={interview}
                title="Travel Interviews"
                link="https://www.socialstation.it/new/?s=solodipassaggio"
                text={projectTexts.Interview[language]}
              />
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
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        first="DEVELOPMENT"
        second="OTHER"
        firstIcon={web}
        secondIcon={link}
        firstText={language === 'IT' ? 'Sviluppo Web' : 'Web Development'}
        secondText={language === 'IT' ? 'Altro' : 'Other'}
      />
    </>
  );
}
