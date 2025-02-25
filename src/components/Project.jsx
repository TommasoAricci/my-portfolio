import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../style/pages/Project-single.scss';
import Tooltip from '@mui/material/Tooltip';

export default function Project({ src, title, link, git, text }) {
  return (
    <Tooltip title={text} placement="bottom" arrow slotProps={{ tooltip: { sx: { fontSize: '1rem', textAlign: 'center' } } }}>
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
