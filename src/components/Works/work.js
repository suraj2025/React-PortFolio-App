import React from 'react'
import './work.css'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'
const work = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'>My PortFolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and</span>
        <div className='workImgs'>
            <img src={p1} alt='' className='workImg'/>
            <img src={p2} alt='' className='workImg'/>
            <img src={p3} alt='' className='workImg'/>
            <img src={p4} alt='' className='workImg'/>
            <img src={p5} alt='' className='workImg'/>
            <img src={p6} alt='' className='workImg'/>
        </div>
    </section>
  )
}

export default work