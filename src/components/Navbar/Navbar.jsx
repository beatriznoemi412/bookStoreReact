import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <Link to="/" className="option">
        <h1 className="navbarLogo">BOOKSTORE</h1>
        </Link>
        <div className="navLink">
          <NavLink id="navLink" to={"/category/Infantiles"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Infantiles</NavLink>
          <NavLink id="navLink" to={"/category/Clasicos"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Clásicos</NavLink>
          <NavLink id="navLink" to={"/category/Autoayuda"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Autoayuda</NavLink>
        </div>
        <CartWidget />
      </nav>
    </div>
  )
};

export default Navbar;