import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useStore } from '../store';
import { Tooltip } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function TooltipWorks({ date, itText, engText, pText, toolText, position, textPosition }) {
  const { language } = useStore();
  const isLaptop = useMediaQuery('(min-width: 1024px)');

  const tooltipStyles = {
    fontSize: '1rem',
    textAlign: 'center',
    display: isLaptop ? 'block' : 'none',
  };

  const tooltipProps = {
    placement: textPosition,
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

  return (
    <Tooltip title={toolText} {...tooltipProps}>
      <div className="tooltip-works">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#162129',
            color: '#fff',
          }}
          date={date}
          dateClassName="custom-date"
          iconStyle={{ background: '#03a9f4', color: '#fff' }}
          position={position}
        >
          <h3 className="vertical-timeline-element-title">{language === 'IT' ? itText : engText}</h3>
          <p>{pText}</p>
        </VerticalTimelineElement>
      </div>
    </Tooltip>
  );
}
