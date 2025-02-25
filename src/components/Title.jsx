import React from 'react';
import '../style/Title.scss';
import { useStore } from '../store';

export default function Title({ title, engTitle }) {
  const { language } = useStore();
  return (
    <>
      <div className="mainAbout">
        <div id="aboutTitle">
          <h1>{language === 'IT' ? title : engTitle}</h1>
        </div>
      </div>
    </>
  );
}
