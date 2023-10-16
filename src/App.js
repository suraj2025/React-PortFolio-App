import React from 'react'
import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills';
import Work from './components/Works/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App(){
  return (
    <div className='App'>
      <Navbar />
   
      <Intro />
      <Skills />
      <Work />
      <Contact />
     
      
      <Footer />
    </div>
  );
}

export default App
