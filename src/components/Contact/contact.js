import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import fb from '../../assets/facebook-icon.png'
import Insta from '../../assets/instagram.png'
import Twit from '../../assets/twitter.png'

const Contact = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e6bme0j', 'template_qckecxw',form.current, 'Ibalya9sT8MPGS_SA')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Send !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contactPage'>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder="Your Name" name='from_name'/>
                    <input type="email" className='email' placeholder="Your Email" name='from_email'/>
                    <textarea rows="5" className='msg' name='message' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={fb} alt='' className='link'/>
                        <img src={Insta} alt='' className='link'/>
                        <img src={Twit} alt='' className='link'/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact