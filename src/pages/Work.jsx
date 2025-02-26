import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NavbarTop from '../components/Navbar-Top';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/pages/Work.scss';
import '../style/pages/About.scss';
import Tabs from '../components/Tabs';
import { useStore } from '../store';
import Title from '../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('works');
  const { setIsOpen, language} = useStore();
  const work = <FontAwesomeIcon icon={faBriefcase} />;
  const education = <FontAwesomeIcon icon={faGraduationCap} />;

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  // content per tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'works':
        return (
          <>
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFD700', color: 'black' }}
                contentArrowStyle={{
                  borderRight: '7px solid  #03a9f4',
                }}
                date="2024 - present"
                iconStyle={{ background: '#03a9f4', color: '#fff' }}
                position="left" // A sinistra
              >
                <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                <p>Erbrand srl and Technip</p>
                {/*                 <div className="infoIcon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div> */}
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#162129',
                  color: '#fff',
                }}
                date="2010 - 2011"
                iconStyle={{ background: '#03a9f4', color: '#fff' }}
                position="right" // A destra
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#162129',
                  color: '#fff',
                }}
                date="2008 - 2010"
                iconStyle={{ background: '#03a9f4', color: '#fff' }}
                position="left" // A sinistra
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#162129',
                  color: '#fff',
                }}
                date="2006 - 2008"
                iconStyle={{ background: '#03a9f4', color: '#fff' }}
                position="right" // A destra
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </>
        );
      case 'education':
        return (
          <>
            <>
              <VerticalTimeline animate={false}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#03a9f4', color: '#fff' }}
                  contentArrowStyle={{
                    borderRight: '7px solid  #03a9f4',
                  }}
                  date="2023 - present"
                  iconStyle={{ background: '#03a9f4', color: '#fff' }}
                  position="left" // A sinistra
                >
                  <h3 className="vertical-timeline-element-title">Start2Impact School</h3>
                  <p>Full Stack Developer Course</p>
                  {/*                 <div className="infoIcon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div> */}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: '#162129',
                    color: '#fff',
                  }}
                  date="2010 - 2011"
                  iconStyle={{ background: '#03a9f4', color: '#fff' }}
                  position="right" // A destra
                >
                  <h3 className="vertical-timeline-element-title">Art Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: '#162129',
                    color: '#fff',
                  }}
                  date="2008 - 2010"
                  iconStyle={{ background: '#03a9f4', color: '#fff' }}
                  position="left" // A sinistra
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: '#162129',
                    color: '#fff',
                  }}
                  date="2006 - 2008"
                  iconStyle={{ background: '#03a9f4', color: '#fff' }}
                  position="right" // A destra
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </>
          </>
        );
      default:
        return null;
    }
  };

  // rendering elements

  return (
    <>
      <Navbar />
      <NavbarTop />
      <Title title="Esperienza" engTitle="Experience" />
      <div className=" mainWork"> {renderTabContent()}</div>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        first="works"
        second="education"
        firstIcon={work}
        secondIcon={education}
        firstText={language === 'IT' ? 'Lavoro' : 'Work'}
        secondText={language === 'IT' ? 'Formazione' : 'Education'}
      />
    </>
  );
}
