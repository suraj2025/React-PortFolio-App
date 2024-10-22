import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './about.json';

const Skills = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <section id='about' className="flex flex-col items-center bg-black text-white px-4 py-10">
  <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 border-b-4 border-green-400 mb-8">Who I am</h2>
  <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:px-16 space-y-8 lg:space-y-0">
    <div className="text-sm sm:text-base font-normal lg:w-1/2" style={{ letterSpacing: "2px" }}>
      My name is Suraj Kumar. I'm a web designer and developer based in Mirzapur, Uttar Pradesh.<br /><br />
      I am a passionate programmer, a quick learner with a self-learning attitude. I love exploring new technologies and problem-solving. My stack includes Node.js, Nest.js, React, Next.js, Redux, and more.
    </div>
    <div className="flex justify-center items-center w-full lg:w-1/2 h-80 lg:h-auto">
      <div ref={container} className="w-full h-full"></div>
    </div>
  </div>
</section>

  );
};

export default Skills;
