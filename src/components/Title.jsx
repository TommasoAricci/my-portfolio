import React from 'react';
import '../style/Title.scss';
import { useStore } from '../store';
import { useMediaQuery } from '@mui/material';

export default function Title({ title, engTitle }) {
  const { language } = useStore();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <>
      {isMobile && (
        <div className="mainAbout">
          <div id="aboutTitle">
            <h1>{language === 'IT' ? title : engTitle}</h1>
          </div>
        </div>
      )}
    </>
  );
}
