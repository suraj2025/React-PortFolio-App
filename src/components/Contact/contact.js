import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import fb from '../../assets/facebook-icon.png';
import Insta from '../../assets/instagram.png';
import Twit from '../../assets/twitter.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e6bme0j', 'template_qckecxw', form.current, 'Ibalya9sT8MPGS_SA')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className='text-center'>
                <h1 className='text-4xl mb-4'>Contact Me</h1>
                <span className='text-lg mb-6'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='flex flex-col items-center justify-center w-full max-w-lg' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='bg-gray-800 text-white p-3 rounded-lg mb-4 w-full' placeholder="Your Name" name='from_name' />
                    <input type="email" className='bg-gray-800 text-white p-3 rounded-lg mb-4 w-full' placeholder="Your Email" name='from_email' />
                    <textarea rows="5" className='bg-gray-800 text-white p-3 rounded-lg mb-4 w-full' name='message' placeholder='Your Message'></textarea>
                    <button type='submit' className='bg-white font-semibold py-2 px-8 rounded-3xl hover:bg-yellow-300 text-black'>Send Message</button>
                    <div className='flex flex-wrap justify-center mt-4'>
                        <img src={fb} alt='' className='h-8 w-8 mx-2 cursor-pointer' />
                        <img src={Insta} alt='' className='h-8 w-8 mx-2 cursor-pointer' />
                        <img src={Twit} alt='' className='h-8 w-8 mx-2 cursor-pointer' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
