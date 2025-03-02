import React from 'react';
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import '../style/Tabs.scss';

export default function Tabs(props) {
  const isLaptop = useMediaQuery('(min-width: 1024px)');

  const tooltipStyles = {
    fontSize: isLaptop ? '1rem' : '0.8rem',
    textAlign: 'center',
    display: 'block',
    zIndex: 9999,
  };

  const tooltipProps = {
    placement: isLaptop ? 'right' : 'top',
    arrow: true,
    disableTouchListener: false,
    enterTouchDelay: 0,
    leaveTouchDelay: 1200,
    slotProps: {
      tooltip: {
        sx: {
          ...tooltipStyles,
          zIndex: 9999,
        },
      },
    },
    PopperProps: {
      sx: { zIndex: 9999 }
    },
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <Tooltip title={props.firstText} {...tooltipProps}>
          <button
            className={`tab-link ${props.activeTab === props.first ? 'active' : ''}`}
            onClick={() => props.setActiveTab(props.first)}
          >
            {props.firstIcon}
          </button>
        </Tooltip>
        <Tooltip title={props.secondText} {...tooltipProps}>
          <button
            className={`tab-link ${props.activeTab === props.second ? 'active' : ''}`}
            onClick={() => props.setActiveTab(props.second)}
          >
            {props.secondIcon}
          </button>
        </Tooltip>
        {props.third && (
          <Tooltip title={props.thirdText} {...tooltipProps}>
            <button
              className={`tab-link ${props.activeTab === props.third ? 'active' : ''}`}
              onClick={() => props.setActiveTab(props.third)}
            >
              {props.thirdIcon}
            </button>
          </Tooltip>
        )}
        {props.four && (
          <Tooltip title={props.fourText} {...tooltipProps}>
            <button
              className={`tab-link ${props.activeTab === props.four ? 'active' : ''}`}
              onClick={() => props.setActiveTab(props.four)}
            >
              {props.fourIcon}
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
