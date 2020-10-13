import React, { useState } from 'react';

import './SASS/first-SASS.scss';

const App = () => {

  const [showContent, setShowContent] = useState('none');
  const [letterSpacing, setLetterSpacing] =  useState('0px');

  const handleShowContent = () => {

  setShowContent('block');

  document.getElementById('content').animate([
    {lineHeight: 0, top: '-30px', opacity: 0},
    {lineHeight: 2, top: '0px', opacity: 1}
    ], {
      duration: 400,
    });

  document.getElementById('title').animate([
    {letterSpacing: '0px'},
    {letterSpacing: '30px'}
    ], {
      duration: 400,
    });

    setTimeout(() => {
      setLetterSpacing('30px');
    }, 350);

  };

  const handleHideContent = () => {

  document.getElementById('content').animate([
    {lineHeight: 2, top: '0px', opacity: 1},
    {lineHeight: 0, top: '-30px', opacity: 0}
    ], {
      duration: 400,
    });

    document.getElementById('title').animate([
      {letterSpacing: '30px'},
      {letterSpacing: '0px'}
      ], {
        duration: 400,
      });

      setTimeout(() => {
        setLetterSpacing('0px');
      }, 350);

    setTimeout(() => {
      setShowContent('none');
    }, 350);

  };

  return (
    <div className="main-container">
      <div className="content-container" onMouseEnter={handleShowContent} onMouseOut={handleHideContent}>
        <p id="title" className="title" style={{letterSpacing: `${letterSpacing}`}}>Hello</p>
        {showContent ?
        <p id="content" className="content" style={{display: `${showContent}`}}>lorem ipsum del sur ndje dcvcfx ekr scghj enckewncsnc cscghjj cwnfonj rccghjc fgfghvghfgh</p>
        :''}
      </div>
      <div className="good-bye px-2 pt-2">goodbye</div>
      <div className="good-times px-2 ml-2">good times</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
      </svg>
    </div>
  );
};
export default App;