import React from 'react';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/mmm_hamburger.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <header className='navContainer'>
        <div className='logoContainer'>
          <img className='logo' src={logo}/>
          <Link className='homeLink link' to='/'>Home</Link>
        </div>
        <div className='navigationContainer'>
          <Link className='navLink link' to='portfolio'>Portfolio</Link>
          <Link className='navLink link' to='about'>About</Link>
          <Link className='navLink link' to='resume'>Resume</Link>
          <Link className='navLink link' to='contact'>Contact</Link>
        </div>
        <div className='hamburger'><img src={hamburger}/></div>
      </header>
    )
  }
}

export default NavBar;