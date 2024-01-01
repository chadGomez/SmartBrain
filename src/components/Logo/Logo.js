import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain-logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0 center">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          height: '80px',
          width: '80px',
        }}
        tiltReverse='true'
        glareEnable='true'
        glareColor='#fff'
        glareMaxOpacity={0.4}
        glarePosition='all'
        scale={1.2}
        transitionSpeed={2000}
      >
        <div className="Tilt-inner pa2">
          <img src={brain} alt="brain logo"/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;