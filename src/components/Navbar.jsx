import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  let { theme, toggleTheme } = useContext(ThemeContext);
  let links = [
    { to: "/", name: "Home" },
    { to: "/products", name: "Products" },
    { to: "/posts", name: "Posts" },
  ];
  return (
    <header className="position-sticky top-0 start-0 d-flex justify-content-between align-items-center bg-success px-4 z-3">
      <h3 className="bg-white text-success rounded-2 px-3 py-1 fw-bold text-capitalize ">
        logo
      </h3>
      <nav className="d-flex justify-content-between align-items-center gap-3  ">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-success bg-white text-decoration-none fw-bold p-2 rounded-2"
                : "text-white text-decoration-none fw-bold p-2 rounded-2"
            }>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="d-flex justify-content-center align-items-center gap-3 ">
        <Link
          to="/cart"
          className="text-white text-decoration-none fw-bold p-2 rounded-2">
          Cart
        </Link>
        <button
          className="bg-transparent border-0 p-3"
          onClick={() => toggleTheme()}>
          {theme == "light" ? "🌙" : "🔆"}
        </button>
      </div>
    </header>
  );
}
