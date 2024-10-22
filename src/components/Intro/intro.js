import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import bg from '../../assets/image.jpg';

const Intro = () => {
    return (
        <section id="intro" className="relative flex flex-col-reverse lg:flex-row justify-between bg-black px-8 lg:px-16 text-white">
            <div className="mt-80  lg:mt-5  h-screen w-full p-8 flex flex-col justify-center absolute lg:relative top-0 left-0 lg:static lg:top-auto lg:left-auto z-10">
                <span className="text-2xl font-light">Hello</span>
                <span className="text-4xl lg:text-5xl font-bold">
                    I'm <span className="text-white text-shadow">Suraj Kumar</span><br />
                    <span className="text-purple-600">
                        <Typewriter
                            words={['Coder ✨', 'Full-stack Web Developer', 'Tech Enthusiast 🚀', 'Lifelong Learner 📚']}
                            loop={true}
                            cursor
                            typeSpeed={70}
                            deleteSpeed={70}
                            delaySpeed={1000}
                        />
                    </span>
                </span>
                <p className="text-sm lg:text-base font-normal tracking-wide lg:w-3/5 mt-4">
                    I am a passionate programmer and quick learner. I love exploring new technologies and solving problems.
                </p>

                <a href="./assets/suraj.pdf" download="suraj.pdf">
                    <button className="bg-white text-black font-bold shadow-lg rounded-full py-3 px-5 mt-4 transition-all hover:bg-yellow-600">
                        Download CV
                    </button>
                </a>
            </div>

            <div className="relative  w-full md:w-1/2">
                <img src={bg} alt="" className="object-cover w-full " />
            </div>
        </section>


    );
};

export default Intro;
