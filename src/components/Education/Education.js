import React, { useEffect, useRef } from 'react';
import './work.css';
import Lottie from 'lottie-web';
import animationData from './lottie.json';

import degree from "./hat.png";

const Work = () => {
  
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return (
    <section id='education' className="flex flex-col items-center justify-center py-6 px-4 bg-black text-white">

      <h2 className='text-4xl font-semibold m-10 text-blue-600 border-b-4 border-green-400'>Education</h2>
      <div className="education-container flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto">
        <div className="animation-container me-5 w-1/2" ref={container}></div>
        <div className="education-content w-full md:w-1/2 p-4">
          <div className='details'>
            {[{
              year: "2024 - Present",
              course: "Bachelor of Technology (B-tech)",
              score:"8.56/10",
              institution: "VIT University - Bhopal"
            }, {
              year: "2016 - 2018",
              course: "Higher Secondary",
              score:"81.2%",
              institution: "SBBPSS Mirzapur"
            }, {
              year: "2014 - 2016",
              course: "Secondary School",
              score:"88.5%",
              institution: "SBBPSS Mirzapur"
            }].map((edu, index) => (
              <div className='data flex items-center mb-4 p-4 bg-gray-800 rounded-lg shadow-md' key={index}>
                <div className='logo-container mr-3'>
                  <img className='logo1 w-12 h-12' src={degree} alt="Degree logo" />
                </div>
                <div className='demo'>
                  <p className='year text-cyan-500 font-bold'>{edu.year}</p>
                  <p className='course font-bold'>{edu.course} {edu.score}</p>
                  <p className='course'>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
