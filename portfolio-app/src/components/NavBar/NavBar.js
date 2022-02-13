import React from 'react';
import './NavBar.css';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/mmm_hamburger.png';

class NavBar extends React.Component {
  render() {
    return (
      <header className='container'>
        <div className='logoContainer'>
          <img className='logo' src={logo}/>
          <div className='homeLink'>Home</div>
        </div>
        <div className='navigationContainer'>
          <div className='navLink'>Portfolio</div>
          <div className='navLink'>About</div>
          <div className='navLink'>Resume</div>
          <div className='navLink'>Contact</div>
        </div>
        <div className='hamburger'><img src={hamburger}/></div>
      </header>
    )
  }
}

export default NavBar;