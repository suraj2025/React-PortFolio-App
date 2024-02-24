import React from 'react'
// import cvFile from './assets/suraj.pdf';
import './intro.css'
import bg from '../../assets/image.jpg'
import hire from '../../assets/hireme.png'
import {Link} from 'react-scroll'
const intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Suraj Kumar</span><br/>Web Designer</span>
            <p className='introPara'>I am a skilled web designer with experiance in creating <br/> visually apealling and user-friendly websites.</p>
            <Link to="../assets/suraj.pdf" target="_blank" download><button className='btn'>Download CV</button> </Link>
            </div>
            <img src={bg} alt="" className='bg'/>

        </section>
    )
}

export default intro
