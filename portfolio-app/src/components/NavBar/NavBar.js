import React from 'react';
import './NavBar.css';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' }
];

function NavBar() {
  return (
    <header className="navContainer">
      <a className="brandMark" href="#home">
        <span className="brandInitials">SD</span>
        <span className="brandText">Sarah Draper</span>
      </a>
      <nav className="navigationContainer" aria-label="Primary">
        {navItems.map((item) => (
          <a className="navLink" href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="navCta" href="https://github.com/Sarah0ravari" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </header>
  );
}

export default NavBar;
