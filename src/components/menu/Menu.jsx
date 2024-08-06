import { useState } from 'react';

export const Menu = () => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  }

  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <span className='menu-toggle' onClick={handleToggle}>
        ☰
      </span>
      <ul className="navbar-links">
        <li>
          <a href="#about-me" className="navbar-link" onClick={handleToggle}>
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="navbar-link" onClick={handleToggle}>
            My skills
          </a>
        </li>
        <li>
          <a href="#projects" className="navbar-link" onClick={handleToggle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#hobbies" className="navbar-link" onClick={handleToggle}>
            Hobbies
          </a>
        </li>
        <li>
          <a href="#contact-me" className="navbar-link" onClick={handleToggle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
