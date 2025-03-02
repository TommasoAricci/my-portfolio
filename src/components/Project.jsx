import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../style/pages/Project-single.scss';
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery } from '@mui/material';

export default function Project({ src, title, link, git, text }) {
  const isLaptop = useMediaQuery('(min-width: 1024px)');

  const tooltipStyles = {
    fontSize: '1rem',
    textAlign: 'center',
    display: isLaptop ? 'block' : 'none',
  };

  const tooltipProps = {
    placement: 'bottom',
    arrow: true,
    disableTouchListener: false,
    enterTouchDelay: 0,
    leaveTouchDelay: 100000,
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

  return (
    <Tooltip title={text} {...tooltipProps}>
      <div className="project-card">
        <img src={src} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
        <div className="project-buttons">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="icon-button play">
              <FontAwesomeIcon icon={faPlay} style={{ width: '20px' }} />
            </button>
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer">
            <button className="icon-button github">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>
        </div>
      </div>
    </Tooltip>
  );
}
