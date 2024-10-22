import React from 'react'

import Navbar from './components/Navbar';
import Intro from './components/Intro/intro'
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Projects from './components/Project/project';
function App(){
  return (
    <div className='App'>
      <Navbar />
   
      <Intro />
      <About />
      <Skill />
      <Education/>
      <Projects/>
      <Contact />
     
      
      <Footer />
    </div>
  );
}

export default App
