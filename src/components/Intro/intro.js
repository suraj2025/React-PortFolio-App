import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './intro.css'
import bg from '../../assets/image.jpg'

const intro = () => {
    
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Suraj Kumar</span><br />
                    <span style={{"color":"#34ebe8"}}>
                    <Typewriter
                        words={['  Coder', '  Web Developer', '  Hacker']}
                        loop={true}
                        cursor

                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    />
                            </span>
                </span>
                <p className='introPara'>I am  a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving.</p>

                <a href="./assets/suraj.pdf" download="resume.pdf">
                    <button className='btn'>Download CV</button>
                </a>
            </div>
            <img src={bg} alt="" className='bg' />

        </section>
    )
}

export default intro;
