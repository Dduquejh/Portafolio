import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Menu = () => {
  const location = useLocation();
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
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/hobbies"
            className={location.pathname === "/hobbies" ? "active" : ""}
          >
            Hobbies
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
