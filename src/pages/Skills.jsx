import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import Title from '../components/Title';
import '../style/pages/Skills.scss';
import htmlImg from '../images/tokens/html.png';
import cssImg from '../images/tokens/css.png';
import jsImg from '../images/tokens/javascript.png';
import reactImg from '../images/tokens/react.png';
import nodeImg from '../images/tokens/nodejs.png';
import mongoImg from '../images/tokens/mongodb.png';
import git from '../images/tokens/git.png';
import copyImg from '../images/tokens/copywriting.png';
import wpImg from '../images/tokens/wordpress.png';
import blImg from '../images/tokens/blender.png';
import btImg from '../images/tokens/boot.png';
import sassImg from '../images/tokens/sass.png';
import exImg from '../images/tokens/ex.png';
import monImg from '../images/tokens/mon.png';
import psImg from '../images/tokens/ps.png';
import seoImg from '../images/tokens/seo.png';
import Tabs from '../components/Tabs';
import netlify from '../images/tokens/netlify.png';
import github from '../images/tokens/github.png';
import npm from '../images/tokens/npm.svg';
import vscode from '../images/tokens/vscode.png';
import { useStore } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faDatabase, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const { language } = useStore();
  const [activeTab, setActiveTab] = useState('frontend');
  const frontend = <FontAwesomeIcon icon={faDesktop} />;
  const backend = <FontAwesomeIcon icon={faDatabase} />;
  const extra = <FontAwesomeIcon icon={faPalette} />;

  useEffect(() => {
    setActiveTab('frontend');
  }, []);

  // content per tab

  const renderTabContent = useMemo(() => {
    switch (activeTab) {
      case 'frontend':
        return (
          <>
            <div className="skills-container">
              <div className="skills-first">
                <h3 id="skills-h3">{language === 'IT' ? 'Linguaggi' : 'Languages'}</h3>
                <div className="languages">
                  <div className="skill-badge">
                    <img src={htmlImg} alt="HTML Logo" />
                    <span>HTML5</span>
                  </div>
                  <div className="skill-badge">
                    <img src={cssImg} alt="CSS Logo" />
                    <span>CSS</span>
                  </div>
                  <div className="skill-badge">
                    <img src={jsImg} alt="JavaScript Logo" />
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="skills-second">
                <h3 id="skills-h3">{language === 'IT' ? 'Librerie - Strumenti' : 'Libraries - Tools'}</h3>
                <div className="libraries">
                  <div className="skill-badge">
                    <img src={reactImg} alt="React Logo" />
                    <span>ReactJS</span>
                  </div>
                  <div className="skill-badge">
                    <img src={sassImg} alt="Sass Logo" />
                    <span>Sass</span>
                  </div>
                  <div className="skill-badge">
                    <img src={btImg} alt="Bootstrap Logo" />
                    <span>Bootstrap</span>
                  </div>
                  <div className="skill-badge">
                    <img src={git} alt="Git logo" />
                    <span>Git</span>
                  </div>
                  <div className="skill-badge">
                    <img src={npm} alt="Git logo" />
                    <span>Npm</span>
                  </div>
                  {/*                 <div className="skill-badge">
                  <img src={axImg} alt="Axios logo" />
                  <span>Axios</span>
                </div> */}
                </div>
              </div>
            </div>
          </>
        );
      case 'backend':
        return (
          <>
            <div className="skills-container">
              <div className="skills-first">
                <h3 id="skills-h3">{language === 'IT' ? 'Linguaggi' : 'Languages'}</h3>
                <div className="languages">
                  <div className="skill-badge">
                    <img src={jsImg} alt="JavaScript Logo" />
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>

              <div className="skills-second">
                <h3 id="skills-h3">{language === 'IT' ? 'Librerie - Database' : 'Libraries - Database'}</h3>
                <div className="libraries">
                  <div className="skill-badge">
                    <img src={nodeImg} alt="Node Logo" />
                    <span>NodeJS</span>
                  </div>
                  <div className="skill-badge">
                    <img src={mongoImg} alt="Mongo logo" />
                    <span>MONGODB</span>
                  </div>
                  <div className="skill-badge">
                    <img src={exImg} alt="Express Logo" />
                    <span>Express</span>
                  </div>
                  <div className="skill-badge">
                    <img src={monImg} alt="Mongoose logo" />
                    <span>MONGOOSE</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'extra':
        return (
          <>
            <div className="skills-container">
              <div className="skills-first">
                <h3 id="skills-h3">{language === 'IT' ? 'Strumenti - Piattaforme' : 'Tools - Platforms'}</h3>
                <div className="extra">
                  <div className="skill-badge">
                    <img src={wpImg} alt="WORDPRESS Logo" />
                    <span>Wordpress</span>
                  </div>
                  <div className="skill-badge">
                    <img src={github} alt="COPYWRITING logo" />
                    <span>Github</span>
                  </div>
                  <div className="skill-badge">
                    <img src={npm} alt="SEO logo" />
                    <span>Npm</span>
                  </div>
                  <div className="skill-badge">
                    <img src={vscode} alt="SEO logo" />
                    <span>VsCode</span>
                  </div>
                  <div className="skill-badge">
                    <img src={netlify} alt="SEO logo" />
                    <span>Netlify</span>
                  </div>
                </div>
              </div>

              <div className="skills-second">
                <h3 id="skills-h3">{language === 'IT' ? 'Scrittura - Grafica' : 'Writing - Graphic'}</h3>
                <div className="extra">
                  <div className="skill-badge">
                    <img src={copyImg} alt="COPYWRITING logo" />
                    <span>COPYWRITING</span>
                  </div>
                  <div className="skill-badge">
                    <img src={seoImg} alt="SEO logo" />
                    <span>SEO</span>
                  </div>
                  <div className="skill-badge">
                    <img src={blImg} alt="SEO logo" />
                    <span>Blender</span>
                  </div>
                  <div className="skill-badge">
                    <img src={psImg} alt="SEO logo" />
                    <span>Photoshop</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  }, [activeTab, language]);

  // rendering elements

  return (
    <>
      <Navbar />
      <NavbarTop />
      <Title title="Competenze" engTitle="Skills" />
      <div className="mainSkills">{renderTabContent}</div>

      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        first="frontend"
        second="backend"
        third="extra"
        firstIcon={frontend}
        secondIcon={backend}
        thirdIcon={extra}
        firstText={language === 'IT' ? 'Frontend' : 'Frontend'}
        secondText={language === 'IT' ? 'Backend' : 'Backend'}
        thirdText={language === 'IT' ? 'Strumenti - Extra' : 'Tools - Extra'}
      />
    </>
  );
}
