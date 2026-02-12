import React from 'react';
import personalData from '../data/personal.json';

const Navigation = () => {
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#expertise', label: 'expertise' },
    { href: '#projects', label: 'projects' },
    { href: '#experience', label: 'experience' },
    { href: '#contact', label: 'contact' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">&lt;{personalData.logo.replace(/[<>]/g, '')}&gt;</div>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
