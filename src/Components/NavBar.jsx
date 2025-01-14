import { Link } from "react-router-dom";
import "../css/Navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link home home-button">
          Home
        </Link>
        <Link to="/Favourites" className="nav-link favourites fav-button">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
