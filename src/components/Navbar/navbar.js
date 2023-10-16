import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import contact from '../../assets/contact.png'
import './navbar.css';
import {Link} from 'react-scroll'
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  return (
      <nav>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Client</Link> */}
        </div>
        <button   className='desktopMenuBtn' onClick={() =>{
          // document.querySelector('.desktopMenuBtn').classList.add('cActive');
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})
        }}><img src={contact} alt="Logo" className='desktopMenuImg' />Contact Me</button>

<img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactSection' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Client</Link> */}
        </div>
    </nav>
   
    
    
  )
}

export default Navbar