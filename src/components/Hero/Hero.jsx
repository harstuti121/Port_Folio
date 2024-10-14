import React from 'react';
import './Hero.css';

const Hero = () => {
  return <section className='hero-container'>
     <div className='hero-content'>
        <h2>Hello,I am Harstuti</h2>
        <h3>Graphic Designer at Matrix Technical Society</h3>
        <p>
            I'm a Postgraduate student at NIT Bhopal
        </p>
     </div>
     <div className='hero-img'>
        <div>
            <div className='tech-icon'>
                <img src='../../../public/assets/images/react.png'/>
            </div>
            <img src="../../../public/assets/images/hars.png" alt="" />
        </div>
        <div>
        <div className='tech-icon'>
            <img src='../../../public/assets/images/html.png'/>
        </div>
        <div className='tech-icon'>
            <img src='../../../public/assets/images/js.png'/>
        </div>
        <div className='tech-icon'>
            <img src='../../../public/assets/images/css.png'/>
        </div>
        </div>
     </div>
  </section>;
};

export default Hero

