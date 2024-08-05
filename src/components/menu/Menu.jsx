import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
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
