import { Link } from "react-router-dom";
import { useState } from 'react';
import "../components/Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const handleNavLink = () => {
    setIsNavOpen(false);
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-item">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              Gina Hodorogea
            </Link>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {navLinks.map(({ title, path }) => (
                  <li className="nav-item" key={title}>
                    <Link
                      to={path}
                      className="nav-link active"
                      aria-current="page"
                      onClick={handleNavLink}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
