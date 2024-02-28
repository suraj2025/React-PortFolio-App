
import './skills.css'

import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import animationData from './about.json';

const Skills = () => {
  
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      // loop: true,
      autoplay: true,
      animationData: animationData // Assuming you've imported the animationData correctly
    });
  }, []);
  return (
    <section id='skills'>
      
      <h2 className='skillTitle'>Who I am</h2>
      <div className="education-container">
        <div className="education-content" style={{"letter-spacing": "2px"}}>
        My name is Suraj Kumar. I'm a web designer and developer based in Mirzapur, Uttar Pradesh.<br /><br />
        I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc.
        
            
          
        </div>
        <div className="animation-container" ref={container}></div>
      </div>
    </section>
  )
}

export default Skills;
