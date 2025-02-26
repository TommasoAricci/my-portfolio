import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import '../style/Tabs.scss';
import { useStore } from '../store';

export default function Tabs(props) {
  const { theme } = useStore();
  const tooltipStyles = {
    fontSize: '1rem',
    textAlign: 'center',
    display: { xs: 'none', md: 'block' },
  };

  return (
    <div className={theme === 'light' ? 'tabs-container-light' : 'tabs-container'}>
      <div className="tabs">
        <Tooltip title={props.firstText} placement="right" arrow slotProps={{ tooltip: { sx: tooltipStyles } }}>
          <button className={`tab-link ${props.activeTab === props.first ? 'active' : ''}`} onClick={() => props.setActiveTab(props.first)}>
            {props.firstIcon}
          </button>
        </Tooltip>
        <Tooltip title={props.secondText} placement="right" arrow slotProps={{ tooltip: { sx: tooltipStyles } }}>
          <button className={`tab-link ${props.activeTab === props.second ? 'active' : ''}`} onClick={() => props.setActiveTab(props.second)}>
            {props.secondIcon}
          </button>
        </Tooltip>
        {props.third && (
          <Tooltip title={props.thirdText} placement="right" arrow slotProps={{ tooltip: { sx: tooltipStyles } }}>
            <button className={`tab-link ${props.activeTab === props.third ? 'active' : ''}`} onClick={() => props.setActiveTab(props.third)}>
              {props.thirdIcon}
            </button>
          </Tooltip>
        )}
        {props.four && (
          <Tooltip title={props.fourText} placement="right" arrow slotProps={{ tooltip: { sx: tooltipStyles } }}>
            <button className={`tab-link ${props.activeTab === props.four ? 'active' : ''}`} onClick={() => props.setActiveTab(props.four)}>
              {props.fourIcon}
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
