import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled web designer with experiance in creating <br/> visually apealling and user-friendly websites.</span>
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