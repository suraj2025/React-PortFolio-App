import React, { useEffect, useRef } from 'react'
import './work.css'
import Lottie from 'lottie-web'
import animationData from './lottie.json';
import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import javascript from "../../assets/skills/javascript.png"
import node from "../../assets/skills/node.png"
import mongo from "../../assets/skills/mongo.png"
import react from "../../assets/skills/react.png"
import java from "../../assets/skills/java.png"

import degree from "./hat.png";

const Work = () => {
  const images = [html, css, javascript, node, mongo, react, java];
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
    <section id='works'>
      <h2 className='workTitle'>Skills</h2>
      
      <div className='skillBars'>
        <div className="skills-gallery">
          {images.map((image, index) => (
            <img src={image} alt={`Image ${index + 1}`} key={index} />
          ))}
        </div>
      </div> 
      
      <h2 className='workTitle'>Education</h2>
      <div className="education-container">
        <div className="animation-container" ref={container}></div>
        <div className="education-content">
          <div className='details'>
            <div className='data'>
              <div className='logo-container'>
                  <img className='logo1' src={degree} alt="BigCo Inc. logo" />
              </div>
              <div className='demo'>
                <p className='year'>2024 present</p>
                <p className='course'>Batchelor of Technology(B-tech)</p>
                <p className='course'>VIT University-Bhopal</p>
              </div>
            </div>
            <div className='data' >
              <div className='logo-container'>

                <img className='logo1' src={degree} alt="BigCo Inc. logo" />
              </div>
              <div className='demo'>
                <p className='year'>2016-2018 </p>
                <p className='course'>Higher Secondary</p>
                <p className='course'>SBBPSS Mirzapur</p>

              </div>
            </div>
            <div className='data' >
              <div className='logo-container'>

                <img className='logo1' src={degree} alt="BigCo Inc. logo" />
              </div>
              <div className='demo'>

                <p className='year'>2006-2016 </p>
                <p className='course'>Secondary School</p>
                <p className='course'>SBBPSS Mirzapur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Work