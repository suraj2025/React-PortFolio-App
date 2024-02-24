import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>My name is ABU SAID. I'm a web designer and developer based in Dhaka, Bangladesh.

I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills
