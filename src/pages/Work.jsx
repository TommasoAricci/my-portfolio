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
import { Tooltip } from '@mui/material';
import TooltipWorks from '../components/Tooltip-works';
import { workTexts, educationTexts } from '../texts';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('works');
  const { setIsOpen, language } = useStore();
  const work = <FontAwesomeIcon icon={faBriefcase} />;
  const education = <FontAwesomeIcon icon={faGraduationCap} />;

  const tooltipStyles = {
    fontSize: '1rem',
    textAlign: 'center',
    display: 'block',
  };

  const tooltipProps = {
    placement: 'bottom-start',
    arrow: true,
    disableTouchListener: false,
    enterTouchDelay: 0,
    leaveTouchDelay: 1200,
    slotProps: { tooltip: { sx: tooltipStyles } },
    PopperProps: {
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: [],
          },
        },
      ],
    },
  };

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
              <Tooltip title={workTexts.first[language]} {...tooltipProps}>
                <div className="tooltip-works">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: '#FFD700',
                      color: 'black',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid #FFD700',
                    }}
                    date="2024 - present"
                    dateClassName="custom-date"
                    iconStyle={{ background: '#03a9f4', color: '#fff' }}
                    position="left"
                  >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                    <p>Erbrand srl and Technip</p>
                  </VerticalTimelineElement>
                </div>
              </Tooltip>

              <TooltipWorks
                date="2023 - 2024"
                itText="Copywriter"
                engText="Copywriter"
                pText="Freelance"
                toolText={workTexts.second[language]}
                position="right"
                textPosition="top-end"
              />

              <TooltipWorks
                date="2022 - 2023"
                itText="Fotografo"
                engText="Photographer"
                pText="Freelance"
                toolText={workTexts.third[language]}
                position="left"
                textPosition="top-start"
              />
            </VerticalTimeline>
          </>
        );
      case 'education':
        return (
          <>
            <>
              <VerticalTimeline animate={false}>
                <Tooltip title={educationTexts.first[language]} {...tooltipProps}>
                  <div className="tooltip-works">
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#03a9f4', color: '#fff' }}
                      contentArrowStyle={{
                        borderRight: '7px solid  #03a9f4',
                      }}
                      date="2023 - present"
                      dateClassName="custom-date"
                      iconStyle={{ background: '#03a9f4', color: '#fff' }}
                      position="left"
                    >
                      <h3 className="vertical-timeline-element-title">Start2Impact School</h3>
                      <p>Full Stack Developer Course</p>
                    </VerticalTimelineElement>
                  </div>
                </Tooltip>

                <TooltipWorks
                  date="2022 - 2023"
                  itText="Frontend Developer"
                  engText="Frontend Developer"
                  toolText={workTexts.third[language]}
                  position="right"
                />

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: '#162129',
                    color: '#fff',
                  }}
                  date="2008 - 2010"
                  dateClassName="custom-date"
                  iconStyle={{ background: '#03a9f4', color: '#fff' }}
                  position="left" // A sinistra
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
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
