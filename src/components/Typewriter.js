import React, { useState, useEffect } from 'react';

const Typewriter = ({
  text = 'Give me something to type!',
  minTypeSpeed = 50,
  maxTypeSpeed = 90,
  initDelay = 700,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(
    () => {
      let str = '';
      let typeSpeed = 0;

      const clicketyClack = () => {
        text.split('').forEach(c => {
          typeSpeed +=
            Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
          setTimeout(() => {
            str += c;
            setDisplayText(str);
          }, initDelay + typeSpeed);
        });
      };
      clicketyClack();
    },
    [text, minTypeSpeed, maxTypeSpeed, initDelay]
  );

  return (
    <div className={className}>
      {displayText}
      <span>&nbsp;</span>
    </div>
  );
};

export default Typewriter;
