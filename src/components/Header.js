import { Link } from "react-router-dom";
import "../components/Header.css";

const Header = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Work", path: "/work" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-item">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Gina Hodorogea
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {navLinks.map(({ title, path }) => (
                  <li className="nav-item" key={title}>
                    <Link to={path} className="nav-link">
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
