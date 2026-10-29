import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FavouritesContext } from "../context/FavouritesContext";

export default function Navbar() {
  const { favourites } = useContext(FavouritesContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">🍳</span>
          <span className="brand-text">
            Recipe <span className="brand-accent">Finder</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="primary-navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
        >
          <li>
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/recipes" className="nav-link" onClick={closeMenu}>
              Recipes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              Favourites
              {favourites.length > 0 && (
                <span className="fav-badge">{favourites.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
